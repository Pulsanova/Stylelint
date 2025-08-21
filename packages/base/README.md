# Pulsanova - Stylelint: Configuration de base

> Configuration Stylelint __de base__ pour les projets Pulsanova

## Quand l'utiliser ?

Cette configuration est à utiliser quand __toutes__ les assertions suivantes sont exactes:
- Le code est écrit en CSS natif.
- Si le code est écrit en SCSS, utilisez la configuration [SCSS](../scss).

## Installation

```bash
# - NPM
npm install --save-dev stylelint @pulsanova/stylelint-config-base

# - Yarn
yarn add --dev stylelint @pulsanova/stylelint-config-base
```

## Usage

Créez un fichier `stylelint.config.mjs` et ajoutez-y la configuration suivante:

```js
export default {
    extends: '@pulsanova/stylelint-config-base',
};
```

__Notes:__   
- Cette configuration part du principe que vous utilisez un autoprefixer pour les préfixes navigateur.
- Si vous avez besoin du support IE 11, penser à passer le CSS par [`postcss-preset-env`](https://preset-env.cssdb.org) >= Stage 3.
