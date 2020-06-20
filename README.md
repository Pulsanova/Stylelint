# Pulsanova - Stylelint Configs.

> Configurations [Stylelint](https://stylelint.io) pour les projets Pulsanova

## Pré-requis

Avant de pouvoir "consommer" les configurations Stylelint Pulsanova, vous devez paramétrer NPM / Yarn pour 
qu'ils utilisent Github Packages pour les paquets `@pulsanova/*` (plus de détails à ce sujet [ici][github-packages-npm-doc]):

```bash
❯ npm login --registry=https://npm.pkg.github.com --scope=@pulsanova
```

## Configurations disponibles

_Note:_ Pour savoir quelle configuration utiliser, reportez-vous aux paragraphes  
"Quand l'utiliser" disponibles dans les différentes configurations.

### [`@pulsanova/stylelint-config-scss`](packages/scss)  
Configuration ESLint pour les projets utilisant SCSS.

### [`@pulsanova/stylelint-config-base`](packages/base)  
Configuration de base, utilisable dans n'importe quel contexte.


[github-packages-npm-doc]: https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
