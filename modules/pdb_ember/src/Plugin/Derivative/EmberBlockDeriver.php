<?php

/**
 * @file
 * Contains \Drupal\pdb_ember\Plugin\Derivative\EmberBlockDeriver.
 */

namespace Drupal\pdb_ember\Plugin\Derivative;

use Drupal\pdb\Plugin\Derivative\PdbBlockDeriver;

class EmberBlockDeriver extends PdbBlockDeriver {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $definitions = parent::getDerivativeDefinitions($base_plugin_definition);

    return array_filter($definitions, function (array $definition) {
      return $definition['info']['presentation'] == 'ember';
    });
  }

}
