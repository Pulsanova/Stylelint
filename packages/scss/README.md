# Pulsanova - Stylelint: Configuration SCSS

> Configuration Stylelint pour les projets Pulsanova utilisant __SCSS__

## Quand l'utiliser ?

Cette configuration est à utiliser quand __toutes__ les assertions suivantes sont exactes:
- Le code est écrit en SCSS.

## Installation

```bash
# - NPM
npm install --save-dev stylelint @pulsanova/stylelint-config-scss

# - Yarn
yarn add --dev stylelint @pulsanova/stylelint-config-scss
```

## Usage

Créez un fichier `stylelint.config.mjs` et ajoutez-y la configuration suivante:

```js
export default {
    extends: '@pulsanova/stylelint-config-scss',
};
```
