<?php

/**
 * @file
 * Contains \Drupal\pdb_ng2\Plugin\Derivative\Ng2BlockDeriver.
 */

namespace Drupal\pdb_ng2\Plugin\Derivative;

use Drupal\pdb\Plugin\Derivative\PdbBlockDeriver;

class Ng2BlockDeriver extends PdbBlockDeriver {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $definitions = parent::getDerivativeDefinitions($base_plugin_definition);

    return array_filter($definitions, function (array $definition) {
      return $definition['info']['presentation'] == 'ng2';
    });
  }

}
