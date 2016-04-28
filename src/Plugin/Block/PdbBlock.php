<?php

/**
 * @file
 * Contains \Drupal\pdb\Plugin\Block\PdbBlock.
 */

namespace Drupal\pdb\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\pdb\FrameworkAwareBlockInterface;

abstract class PdbBlock extends BlockBase implements FrameworkAwareBlockInterface {

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
      // @todo Do something to pass in contexts to components
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
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function attachPageHeader(array $component) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    // @TODO: This is useless right now. In our original module we had a
    // JSON-ified version of the form API passing necessary fields into Drupal.
    // A similar approach is necessary.
    $form = parent::blockForm($form, $form_state);

    // Retrieve existing configuration for this block.
    $config = $this->getConfiguration();

    // Add a form field to the existing block configuration form.
    $form['example'] = array(
      '#type' => 'textfield',
      '#title' => t('example'),
      '#default_value' => isset($config['example']) ? $config['example'] : '',
    );
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state) {
    // Nothing yet.
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    // Save our custom settings when the form is submitted.
    $this->setConfigurationValue('example', $form_state->getValue('example'));
  }

}
