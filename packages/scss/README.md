# Pulsanova - Stylelint: Configuration SCSS

> Configuration Stylelint pour les projets Pulsanova utilisant __SCSS__

## Quand l'utiliser ?

Cette configuration est à utiliser quand __toutes__ les assertions suivantes sont exactes:
- Le code est écrit en SCSS.

## Installation

```bash
yarn add --dev stylelint
yarn add --dev @pulsanova/stylelint-config-scss
```

## Usage

Créez un fichier `.stylelintrc.json` et ajoutez-y la configuration suivante:

```json
{
    "extends": "@pulsanova/stylelint-config-scss"
}
```

## Règles

Cette configuration étend la [Configuration de base](../base).

Voir directement [le code source](index.js) des règles pour plus d'informations quant
aux règles activées / overwritées dans cette configuration.  
Celui-ci (le code source) contient des commentaires sur le pourquoi de toutes les règles
activées / overwritées par rapport à la configuration de base.
