<?php

/**
 * @file
 * Contains \Drupal\pdb\Plugin\Block\PdbBlock.
 */

namespace Drupal\pdb\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Entity\Plugin\DataType\EntityAdapter;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\pdb\FrameworkAwareBlockInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Serializer\Serializer;

abstract class PdbBlock extends BlockBase implements FrameworkAwareBlockInterface, ContainerFactoryPluginInterface {

  /**
   * The serializer.
   *
   * @var \Symfony\Component\Serializer\Serializer
   */
  protected $serializer;

  /**
   * PdbBlock constructor.
   *
   * @param array $configuration
   *   Plugin configuration.
   * @param string $plugin_id
   *   The plugin ID.
   * @param mixed $plugin_definition
   *   The plugin definition.
   * @param \Symfony\Component\Serializer\Serializer $serializer
   *   The serializer.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, Serializer $serializer) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->serializer = $serializer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('serializer')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $component = $this->getComponentInfo();
    $this->configuration['uuid'] = \Drupal::service('uuid')->generate();

    $attached = array();

    $framework = $this->attachFramework($component);
    if ($framework) {
      $attached = array_merge_recursive($attached, $framework);
    }

    $settings = $this->attachSettings($component);
    if ($settings) {
      $attached = array_merge_recursive($attached, $settings);
    }

    $libraries = $this->attachLibraries($component);
    if ($libraries) {
      $attached = array_merge_recursive($attached, $libraries);
    }

    $header = $this->attachPageHeader($component);
    if ($header) {
      $attached = array_merge_recursive($attached, $header);
    }

    if ($contexts = $this->getContexts()) {
      $attached['drupalSettings']['pdb']['contexts'] = $this->getJSContexts($contexts);
    }
    return array(
      '#attached' => $attached,
    );
  }

  /**
   * Returns the component definition.
   *
   * @return array
   *   The component definition.
   */
  public function getComponentInfo() {
    $plugin_definition = $this->getPluginDefinition();
    return $plugin_definition['info'];
  }

  /**
   * {@inheritdoc}
   */
  public function attachFramework(array $component) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function attachLibraries(array $component) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function attachSettings(array $component) {
    if (isset($component['settings'])) {
      return array(
        'drupalSettings' => $component['settings'],
      );
    }
    else {
      return array();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function attachPageHeader(array $component) {
    return array();
  }

  /**
   * Add serialized entity to the JS Contexts.
   *
   * @param \Drupal\Core\Entity\Plugin\DataType\EntityAdapter $data
   *   The entity to serialize.
   * @param array $js_contexts
   *   The full array of JS contexts.
   * @param string $key
   *   The context key.
   */
  protected function addEntityJSContext(EntityAdapter $data, array &$js_contexts, $key) {
    $entity = $data->getValue();
    $entity_access = $entity->access('view', NULL, TRUE);
    if (!$entity_access->isAllowed()) {
      return;
    }
    foreach ($entity as $field_name => $field) {
      /** @var \Drupal\Core\Field\FieldItemListInterface $field */
      $field_access = $field->access('view', NULL, TRUE);
      // @todo Used addCacheableDependency($field_access);

      if (!$field_access->isAllowed()) {
        $entity->set($field_name, NULL);
      }
    }
    // Serialize the entity.
    $serialized_entity = $this->serializer->serialize($entity, 'json');
    $js_contexts["$key:" . $entity->getEntityTypeId()] = $serialized_entity;
  }

  /**
   * Get an array of serialized JS contexts.
   *
   * @param \Drupal\Component\Plugin\Context\ContextInterface[] $contexts
   *   The contexts to serialize.
   *
   * @return array
   *   An array of serialized JS contexts.
   */
  protected function getJSContexts(array $contexts) {
    $js_contexts = [];
    foreach ($contexts as $key => $context) {
      $data = $context->getContextData();
      if ($data instanceof EntityAdapter) {
        $this->addEntityJSContext($data, $js_contexts, $key);
      }
    }
    return $js_contexts;
  }

}
