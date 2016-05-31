<?php

namespace Drupal\pdb;

use Drupal\Core\Extension\ExtensionDiscovery;
use Drupal\Core\Extension\InfoParserInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;

/**
 * Discovery service for front-end components provided by modules and themes.
 *
 * Components (anything whose info file 'type' is 'pdb') are treated as Drupal
 * extensions unto themselves.
 */
class ComponentDiscovery extends ExtensionDiscovery implements ComponentDiscoveryInterface {

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
   * ComponentDiscovery constructor.
   *
   * @param string $root
   *   The root directory of the Drupal installation.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   * @param \Drupal\Core\Extension\InfoParserInterface $info_parser
   *   The info parser.
   */
  public function __construct($root, ModuleHandlerInterface $module_handler, InfoParserInterface $info_parser) {
    parent::__construct($root);
    $this->moduleHandler = $module_handler;
    $this->infoParser = $info_parser;
  }

  /**
   * {@inheritdoc}
   */
  public function getComponents() {
    // Find components.
    $components = $this->scan('pdb');

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

      if (empty($component->info['path'])) {
        // TODO: This can't stay here, this is ng2 specific.
        $config_settings = \Drupal::config('pdb_ng2.settings');
        $ext = 'js';
        if (isset($config_settings) && $config_settings->get('development_mode')) {
          $ext = 'ts';
        }
        $component->info['path'] = $component->getPath() . '/component.' . $ext;
      }
      else {
        $path = $component->info['path'];
        if ($path{0} != '/') {
          $component->info['path'] = $component->getPath() . '/' . $path;
        }
      }

      // Merge in defaults and save.
      $components[$key]->info = $component->info + $defaults;
    }
    $this->moduleHandler->alter('component_info', $components);

    return $components;
  }

}
