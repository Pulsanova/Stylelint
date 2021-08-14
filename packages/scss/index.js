'use strict';

module.exports = {
    extends: '@pulsanova/stylelint-config-base',
    plugins: ['stylelint-scss'],
    rules: {
        // - Empêche l'utilisation de "at-rules" non reconnues (e.g. `@unknown {}`).
        // Note: On désactive la règle "normale", vu qu'elle ne supporte pas les "at-rules" SCSS.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: [] }],

        // - Retour à la ligne après chaque accolade de fermeture, sauf pour les conditions (SASS)
        // @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
        'block-closing-brace-newline-after': ['always', {
            ignoreAtRules: ['if', 'else'],
        }],

        // - S'assure que les boucles `each` avec utilisation de clé + valeur sont bien utilisés.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line
        'scss/at-each-key-value-single-line': true,

        // - Il doit y avoir une ligne vide après l'accolade fermante du dernier `@else` des conditions.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

        // - Il doit y avoir un espace après l'accolade fermante des `@else` intermediaires des conditions.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after
        'scss/at-else-closing-brace-space-after': 'always-intermediate',

        // - Il ne doit jamais y avoir de lignes vides avant les `@else` des conditions.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before
        'scss/at-else-empty-line-before': 'never',

        // - Il doit toujours y avoir un espace avant la condition dans les `@else if` (e.g. `@else if ()`).
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before
        'scss/at-else-if-parentheses-space-before': 'always',

        // - Pas d'utilisation des `@extends` sans placeholder.
        //   En effet, les placeholders ont été conçus dans cette optique contraitement
        //   à l'extension des classes qui introduit de la dette technique.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder
        'scss/at-extend-no-missing-placeholder': true,

        // - Pas d'argument nommés dans les appels de fonction.
        //   (sauf certaines fonctions du core de sass necessitant des arguments nommés)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments
        'scss/at-function-named-arguments': ['never', {
            ignoreFunctions: [
                'scale-color',
                'change-color',
                'adjust-color',
                'invert',
                'mix',
                'color.scale',
                'color.change',
                'color.adjust',
                'color.invert',
                'color.mix',
                'list.join',
                'meta.get-function',
            ],
        }],

        // - Vérifie le non nommage des mixins, fonctions et placeholders.
        //   Ceux-ci doivent appliquer les même règles que pour le nommage des components à la différence
        //   qu'il n'y a pas la notion d'élément ou de modifiers et que l'on utilise un tiret pour "classer".
        //   (e.g. `@extend %MyComponent-button;`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/
        //      https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/
        //      https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/
        // @see https://regex101.com/r/Sa87MB/4
        'scss/at-function-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,
        'scss/at-mixin-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,
        'scss/percent-placeholder-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,

        // - Il ne doit pas y avoir d'espace avant la condition dans les fonctions (e.g. `@function foo()`).
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before
        'scss/at-function-parentheses-space-before': 'never',

        // - Il doit toujours y avoir une ligne vide après les `@if` non suivi d'un `@else[ if]`.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

        // - Il doit y avoir un espace après l'accolade fermante des `@if` non-finaux des conditions.
        //   (non finaux dans le sens ou ils sont suivis d'un `@else[ if]`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after
        'scss/at-if-closing-brace-space-after': 'always-intermediate',

        // - Pas de underscore devant les imports de fichiers `partials` (e.g. `@import './file.scss';`).
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore
        'scss/at-import-no-partial-leading-underscore': true,

        // - Les imports de partials ne doivent pas utiliser d'extension `.scss`.
        // @see https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-import-partial-extension
        'scss/at-import-partial-extension': 'never',

        // - Empêche l'utilisation de l'extension `.scss` dans les `@imports`, celle-ci est inférée automatiquement.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist
        'scss/at-import-partial-extension-blacklist': ['scss'],

        // - Il ne doit pas y avoir de parenthèses lorsqu'un mixin ne comporte par d'arguments (e.g. `@include my-mixin;`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses
        'scss/at-mixin-argumentless-call-parentheses': 'never',

        // - Pas d'argument nommés dans les appels de mixins.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments
        'scss/at-mixin-named-arguments': 'never',

        // - Pas d'espace avant les parenthèses dans les appels mixins. (e.g. `@include foo()`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before
        'scss/at-mixin-parentheses-space-before': 'never',

        // - Les déclarations des propriétés liées par un namespace (e.g. `font-*`) doivent être sous forme séparées.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties
        'scss/declaration-nested-properties': 'never',

        // - Empêche les duplications de déclaration de props. liées par un namespace (e.g. `font-*`) sous forme imbriquée
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups
        'scss/declaration-nested-properties-no-divided-groups': true,

        // - Le casting de valeurs numériques doit être effectué via `$value * 1<unit>` et non `#{value}<unit>`.
        //   Ceci permet de garder une valeur numérique alors que l'autre façon de faire converti la valeur en
        //   string et empêche toute opération mathématique dessus.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values
        'scss/dimension-no-non-numeric-values': true,

        // - Il doit toujours y avoir un espace après les deux-points dans les variables dans il s'agit
        //   d'une valeur sur une ligne. (e.g. `$ma-var: blue;`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after
        'scss/dollar-variable-colon-space-after': 'always-single-line',

        // - Pas d'espace avant les deux-points (`:`) dans les propriétés (e.g. `color: blue;`).
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before
        'scss/dollar-variable-colon-space-before': 'never',

        // - Les variables doivent être placées en première dans les blocks.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block
        'scss/dollar-variable-first-in-block': [true, {
            ignore: ['comments', 'imports'],
            // Note: Exception pour les variables "racine" car il y a un faux positif avec @charset.
            except: ['root'],
        }],

        // - Vérifie la bonne interpolation des variables lorsqu'elles sont utilisées.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation
        'scss/dollar-variable-no-missing-interpolation': true,

        // - Vérifie le nommage des variables. Celles-ci doivent toujours être en "kebab-case".
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/
        // @see https://regex101.com/r/EmOM1V/7
        'scss/dollar-variable-pattern': [/^_?[a-z][a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: `Expected variable name to match this pattern: \`$name[-...]]\``,
        }],

        // - Il doit toujours y avoir une ligne vide avant les commentaires double-slash, sauf:
        //   - Si le commentaire est le premier élément dans un block.
        //   - Si le commentaire suit un autre commentaire.
        //   - Si le commentaire contient une command stylelint.
        'scss/double-slash-comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['between-comments', 'stylelint-commands'],
        }],

        // - Il doit toujours y avoir un espace juste après les double-slashs d'un commentaire ... double-slash.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside
        'scss/double-slash-comment-whitespace-inside': 'always',

        // - S'assure que la fonction `unquote` n'est pas utilisée avec une chaîne déjà sans quotes.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside
        'scss/function-unquote-no-unquoted-strings-inside': true,

        // - Vérifie l'absence de doublons dans les mixins.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins
        'scss/no-duplicate-mixins': true,

        // - Pas de retour à la ligne juste avant les opérateurs mathématiques.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
        'scss/operator-no-newline-before': true,

        // - Vérifie le nombre d'espaces entres les opérateurs mathématiques.
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced
        'scss/operator-no-unspaced': true,

        // - Empêche l'utilisation de selecteurs imbriqués redondants. (e.g. `a { & b { ... } }`)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector
        'scss/selector-no-redundant-nesting-selector': true,

        //
        // - Disabled rules
        //

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null
        'scss/at-if-no-null': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist
        'scss/at-import-partial-extension-whitelist': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses
        'scss/at-rule-conditional-no-parentheses': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-empty
        'scss/comment-no-empty': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud
        'scss/comment-no-loud': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after
        'scss/dollar-variable-colon-newline-after': null,

        // NOTE: Cette règle est toutefois à activer dans les projets non-finaux (libs, ui-kits, thèmes, ...)
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md
        'scss/dollar-variable-default': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after
        'scss/dollar-variable-empty-line-after': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before
        'scss/dollar-variable-empty-line-before': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-inline
        'scss/double-slash-comment-inline': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative
        'scss/function-color-relative': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside
        'scss/function-quote-no-quoted-strings-inside': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes
        'scss/map-keys-quotes': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable
        'scss/media-feature-value-dollar-variable': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables
        'scss/no-dollar-variables': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables
        'scss/no-duplicate-dollar-variables': null,

        // TODO: Activate ?
        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names
        'scss/no-global-function-names': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after
        'scss/operator-no-newline-after': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import
        'scss/partial-no-import': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators
        'scss/selector-nest-combinators': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name
        'scss/selector-no-union-class-name': null,
    },
};
