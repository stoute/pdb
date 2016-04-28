<?php

/**
 * @file
 * Contains \Drupal\pdb_react\Plugin\Derivative\ReactBlockDeriver.
 */

namespace Drupal\pdb_react\Plugin\Derivative;

use Drupal\pdb\Plugin\Derivative\PdbBlockDeriver;

class ReactBlockDeriver extends PdbBlockDeriver {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $definitions = parent::getDerivativeDefinitions($base_plugin_definition);

    return array_filter($definitions, function (array $definition) {
      return $definition['info']['presentation'] == 'react';
    });
  }

}
