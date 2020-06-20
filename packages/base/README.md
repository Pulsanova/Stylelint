# Pulsanova - Stylelint: Configuration de base

> Configuration Stylelint __de base__ pour les projets Pulsanova

## Quand l'utiliser ?

Cette configuration est à utiliser quand __toutes__ les assertions suivantes sont exactes:
- Le code est écrit en CSS natif.
- Si le code est écrit en SCSS, utilisez la configuration [SCSS](../scss).

## Installation

```bash
yarn add --dev stylelint
yarn add --dev @pulsanova/stylelint-config-base
```

## Usage

Créez un fichier `.stylelintrc.json` et ajoutez-y la configuration suivante:

```json
{
    "extends": "@pulsanova/stylelint-config-base"
}
```

__Notes:__   
- Cette configuration part du principe que vous utilisez un autoprefixer pour les préfixes navigateur.
- Si vous avez besoin du support IE 11, penser à passer le CSS par [`postcss-preset-env`](https://preset-env.cssdb.org) >= Stage 3.

## Règles

Cette configuration étend la [Configuration standard Stylelint][stylelint-standard-rules].

Voir directement [le code source](index.js) des règles pour plus d'informations quant
aux règles activées / overwritées dans cette configuration.  
Celui-ci (le code source) contient des commentaires sur le pourquoi de toutes les règles
activées / overwritées par rapport à la configuration standard stylelint.

[stylelint-standard-rules]: https://github.com/stylelint/stylelint-config-standard
