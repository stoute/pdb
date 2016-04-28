<?php

/**
 * @file
 * Contains \Drupal\pdb\Plugin\Derivative\PdbBlockDeriver.
 */

namespace Drupal\pdb\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Core\Extension\ExtensionDiscovery;
use Drupal\Core\Extension\InfoParserInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\Context\ContextDefinition;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a deriver for pdb blocks.
 */
class PdbBlockDeriver extends DeriverBase implements ContainerDeriverInterface {

  /**
   * The module handler.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The info parser.
   *
   * @var \Drupal\Core\Extension\InfoParserInterface
   */
  protected $infoParser;

  /**
   * PdbBlockDeriver constructor.
   *
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   * @param \Drupal\Core\Extension\InfoParserInterface $info_parser
   *   The info parser.
   */
  public function __construct(ModuleHandlerInterface $module_handler, InfoParserInterface $info_parser) {
    $this->moduleHandler = $module_handler;
    $this->infoParser = $info_parser;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static(
      $container->get('module_handler'),
      $container->get('info_parser')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    // Get all custom blocks which should be rediscovered.
    $components = $this->getComponents();
    foreach ($components as $block_id => $block_info) {
      $this->derivatives[$block_id] = $base_plugin_definition;
      $this->derivatives[$block_id]['info'] = $block_info->info;
      $this->derivatives[$block_id]['admin_label'] = $block_info->info['name'];
      $this->derivatives[$block_id]['cache'] = DRUPAL_NO_CACHE;
      if (isset($block_info->info['contexts'])) {
        $this->derivatives[$block_id]['context'] = $this->createContexts($block_info->info['contexts']);
      }
    }
    return $this->derivatives;
  }

  /**
   * Helper function to scan and collect component .info.yml data.
   *
   * This is based on system.module function _system_rebuild_module_data().
   *
   * @TODO: The results of this need to be cached.
   *
   * @return \Drupal\Core\Extension\Extension[]
   *   An associative array of component information.
   */
  public function getComponents() {
    $listing = new ExtensionDiscovery(\Drupal::root());

    // Find components.
    $components = $listing->scan('pdb');

    // Set defaults for module info.
    $defaults = array(
      'dependencies' => array(),
      'description' => '',
      'package' => 'Other',
      'version' => NULL,
    );

    // Read info files for each module.
    foreach ($components as $key => $component) {
      // Look for the info file.
      $component->info = $this->infoParser->parse($component->getPathname());
      $component->info['path'] = $component->origin . '/' . $component->subpath;

      // Merge in defaults and save.
      $components[$key]->info = $component->info + $defaults;
    }
    $this->moduleHandler->alter('component_info', $components);

    return $components;
  }

  /**
   * @param array $contexts
   *   Contexts as defined in component label.
   *
   * @return \Drupal\Core\Plugin\Context\ContextDefinition[]
   *   Array of context to be used by block module
   *   @todo where is this defined in block module
   */
  protected function createContexts(array $contexts) {
    $contextsDefinitions = [];
    if (isset($contexts['entity'])) {
      // @todo Check entity type exists and fail!
      $contextsDefinitions['entity'] = new ContextDefinition('entity:' . $contexts['entity']);
    }
    // @todo Dynamically handle unknown context definitions
    return $contextsDefinitions;
  }

}
