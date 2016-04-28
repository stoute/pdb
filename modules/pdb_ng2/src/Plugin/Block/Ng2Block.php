<?php

/**
 * @file
 * Contains \Drupal\pdb_ng2\Plugin\Block\Ng2Block.
 */

namespace Drupal\pdb_ng2\Plugin\Block;

use Drupal\pdb\Plugin\Block\PdbBlock;

/**
 * Exposes an Angular 2 component as a block.
 *
 * @Block(
 *   id = "ng2_component",
 *   admin_label = @Translation("Angular 2 component"),
 *   deriver = "\Drupal\pdb_ng2\Plugin\Derivative\Ng2BlockDeriver"
 * )
 */
class Ng2Block extends PdbBlock {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $info = $this->getComponentInfo();
    $machine_name = $info['machine_name'];

    $build = parent::build();
    $build['#allowed_tags'] = array($machine_name);
    $build['#markup'] = '<' . $machine_name . ' id="instance-id-' . $this->configuration['uuid'] . '"></' . $machine_name . '>';

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function attachFramework(array $component) {
    $attached = array();
    $attached['drupalSettings']['ng2']['global_injectables'] = array();

    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachSettings(array $component) {
    $machine_name = $component['machine_name'];
    $uuid = $this->configuration['uuid'];

    $attached = array();
    $attached['drupalSettings']['ng2']['components']['instance-id-' . $uuid] = array(
      'uri' => '/' . $component['path'],
      'element' => $machine_name,
    );
    $attached['drupalSettings']['apps'][$machine_name]['uri'] = '/' . $component['path'];

    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachLibraries(array $component) {
    return array(
      'library' => array(
        'pdb_ng2/angular2',
      ),
    );
  }

}
