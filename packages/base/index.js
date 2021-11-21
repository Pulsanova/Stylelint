'use strict';

module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-order',
    ],
    rules: {
        // - Les valeurs de transparence doivent utiliser le format numérique (pour le moment).
        // TODO: Suivre l'évolution du support navigateur pour le format pourcentage et passer à ce format.
        //       (https://caniuse.com/#feat=mdn-css_properties_opacity_percentages)
        // @see https://stylelint.io/user-guide/rules/alpha-value-notation
        'alpha-value-notation': 'number',

        // - S'assure qu'il y a bien une ligne vide avant les "at-rules" (e.g. `@include`, `@media`)
        //   Autorise l'absence de ligne vide pour:
        //   - Les at-rules sans corps qui se suivent
        //   - Les at-rules qui sont premières dans leur block
        //   - Les `@if`, `@else`, `@return` et `@content`
        // @see https://stylelint.io/user-guide/rules/at-rule-empty-line-before
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-same-name-blockless',
                'first-nested',
            ],
            ignore: ['after-comment'],
            ignoreAtRules: ['if', 'else', 'return', 'content', 'import', 'use', 'forward'],
        }],

        // - S'assure que certaines at-rules normalisées contiennent bien toutes les propriétés requises:
        //   - `@font-face`: Doit contenir au minimum les propriétés: `font-family`, `font-weight`, `font-style` et `src`.
        // @see https://stylelint.io/user-guide/rules/at-rule-property-required-list
        'at-rule-property-required-list': {
            'font-face': ['font-family', 'font-weight', 'font-style', 'src'],
        },

        // - Jamais d'espace devant le point virgule des @-rules.
        // @see https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
        'at-rule-semicolon-space-before': 'never',

        // - Interdit les blocks vides. (e.g. `.ma-classe {}`)
        // @see https://stylelint.io/user-guide/rules/block-no-empty
        'block-no-empty': true,

        // - Retour à la ligne après chaque accolade de fermeture.
        // @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
        'block-closing-brace-newline-after': 'always',

        // - Les fonctions liées aux couleurs (`rgb`, `hsl`) doivent utiliser la syntaxe legacy (pour le moment).
        // TODO: - Suivre l'évolution du proposal et changer pour `modern` dès que c'est en stage 3.
        //         (https://preset-env.cssdb.org/features#color-functional-notation)
        //       - Vérifier que la prise en charge des variables a été corrigée.
        //         (= `rgb($ma-var, $alpha)` ne fonctionnait pas correctement)
        // @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
        'color-function-notation': 'legacy',

        // - Interdit l'utilisation de la composante "alpha" des codes hexadecimaux au profit de `rgba()`.
        // @see https://stylelint.io/user-guide/rules/list/color-hex-alpha
        'color-hex-alpha': 'never',

        // - Il ne faut pas utiliser les noms de couleurs mais
        //   privilegier les codes hexadécimaux.
        // @see https://stylelint.io/user-guide/rules/color-named
        'color-named': 'never',

        // - Interdit l'utilisation de code hexadécimaux invalides pour les couleurs.
        // @see https://stylelint.io/user-guide/rules/color-no-invalid-hex
        'color-no-invalid-hex': true,

        // - S'assure que `var()` est bien utilisé quand on tente d'utiliser une custom-property.
        // @see https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/
        'custom-property-no-missing-var-function': true,

        // - Les propriétés customs doivent être en "hyphenated lowercase".
        //   Elles ne doivent pas commencer par un chiffre et finir par un tiret.
        //   (e.g. `--ma-var`)
        // @see https://stylelint.io/user-guide/rules/custom-property-pattern
        // @see https://regex101.com/r/3WVokQ/1
        'custom-property-pattern': /^(?:[a-z][a-z0-9]*)(?:-{1,2}[a-z0-9]+)*$/,

        // - Interdit les propriétés en double à l'intérieur des blocks de déclaration.
        //   Cette règle ignore les propriétés dupliquées avec des valeurs avec préfixes navigateur différents.
        //   (e.g. `width: fit-content; width: -moz-fit-content;`)
        // @see https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates-with-same-prefixless-values'],
        }],

        // - Interdit l'utilisation du mot clé `!important`,
        //   Le fait de devoir echapper son utilisation avec un commentaire
        //   de désactivation de règle permet de s'assurer qu'il ne sera
        //   utilisé qu'en cas de réel besoin.
        // @see https://stylelint.io/user-guide/rules/declaration-no-important
        'declaration-no-important': true,

        // - Restreint les unités utilisables (pour l'homogénéisation de la codebase).
        // @see https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list
        'declaration-property-unit-allowed-list': {
            /* eslint-disable key-spacing */
            'line-height'             : ['px', 'pt', 'mm', 'em', 'rem'],
            'font-size'               : ['px', 'pt', 'em', 'rem'],
            '/^((min|max)-)?height$/' : ['px', 'pt', 'mm', 'em', 'vh', '%', 'rem'],
            '/^((min|max)-)?width$/'  : ['px', 'pt', 'mm', 'em', 'vw', '%', 'rem'],
            'vertical-align'          : ['px', 'pt', 'em', 'rem'],
            '/.*/'                    : ['px', 'pt', 'mm', 'em', 'rem', '%', 'deg', 'vh', 'vw', 'ms'],
            /* eslint-enable key-spacing */
        },

        // - Les `font-weight` doivent être déclarées numériquement (e.g. `font-weight: 800;`)
        // @see https://stylelint.io/user-guide/rules/font-weight-notation
        'font-weight-notation': 'numeric',

        // - Une indentation de 4 espaces doit être utilisée.
        // @see https://stylelint.io/user-guide/rules/indentation
        'indentation': 4,

        // - Les keyframess doivent être "hyphenated" et ne pas:
        //   - Commencer par un chiffre et finir par un tiret (e.g. `@keyframes MonBlock-mon-animation {}`).
        //   - Contenir un mix de CamelCase et de lower kebab-case (e.g. `@keyframes mon-block-MalNommé {}`).
        // @see https://stylelint.io/user-guide/rules/keyframes-name-pattern/
        // @see https://regex101.com/r/Tbk2wH/1
        'keyframes-name-pattern': /^(?:(?:[a-z][a-z0-9]*)(?:-{1,2}[a-z0-9]+)*|(?:[A-Z][a-zA-Z0-9]*)(?:-{1,2}[a-zA-Z0-9]+)*)$/,

        // - S'assure que les saut de lignes sont bien des sauts de ligne unix.
        // @see https://stylelint.io/user-guide/rules/linebreaks
        'linebreaks': 'unix',

        // - Limite la profondeur d'imbrication des règles à 5.
        // @see https://stylelint.io/user-guide/rules/max-nesting-depth
        'max-nesting-depth': 5,

        // - Empêche la duplication des selecteurs.
        // @see https://stylelint.io/user-guide/rules/no-duplicate-selectors
        'no-duplicate-selectors': true,

        // - Les lignes ne doivent pas faire plus de 120 caractères de long.
        //   (sauf pour les commentaires)
        // @see https://stylelint.io/user-guide/rules/max-line-length
        'max-line-length': [120, { ignore: ['comments'] }],

        // - Toujours ajouter le "0." devant les nombres.
        // @see https://stylelint.io/user-guide/rules/number-leading-zero
        'number-leading-zero': 'always',

        // - Précision max des nombres à 4 chiffres après la virgule.
        // @see https://stylelint.io/user-guide/rules/number-max-precision
        'number-max-precision': 4,

        // - S'assure du bon ordre des éléments dans les blocks de déclaration CSS.
        //
        //   ```scss
        //   .test {
        //       $ma-var: #fff;
        //
        //       @extend %error;
        //       @include icon(plus);
        //
        //       display : block:
        //       color   : $ma-var;
        //
        //       @include machin() {
        //           color: red;
        //       }
        //
        //       &__sub {
        //           text-align: left;
        //       }
        //
        //       @media print {
        //           .btn {
        //               color: red;
        //           }
        //       }
        //   }
        //   ```
        //
        // @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
        'order/order': [
            // - Variables
            'dollar-variables',
            'custom-properties',

            // - @extend
            { type: 'at-rule', name: 'extend' },

            // - @include without inner content.
            { type: 'at-rule', name: 'include', hasBlock: false },

            // - Properties
            'declarations',

            // - @include with inner content.
            { type: 'at-rule', name: 'include', hasBlock: true },

            // - Sub-rules
            'rules',
            { type: 'at-rule', name: 'at-root', hasBlock: true },

            // - @media (...) {}
            {
                type: 'at-rule',
                name: 'include',
                parameter: 'media-min',
                hasBlock: true,
            },
            {
                type: 'at-rule',
                name: 'include',
                parameter: 'media-max',
                hasBlock: true,
            },
            { type: 'at-rule', name: 'media', hasBlock: true },

            // - @content
            { type: 'at-rule', name: 'content' },
        ],

        // - S'assure du bon ordre des propriétés.
        // @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
        'order/properties-order': [
            require('./data/properties-order'),
            { unspecified: 'bottom' },
        ],

        // - Empêche l'utilisation de propriétés incompatibles entres-elles.
        //   (e.g. `display: inline; margin-top: 10px;`)
        // @see https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
        'plugin/declaration-block-no-ignored-properties': true,

        // - Interdit les propriétés inconnues.
        // @see https://stylelint.io/user-guide/rules/property-no-unknown
        'property-no-unknown': true,

        // - Vérifie la syntaxe des selecteurs qui doit correspondre à nos conventions BEM.
        //
        //   ```scss
        //   // - Selecteurs valides:
        //   .Block--modifier {}
        //   .block-name__element--modifier {}
        //   .BlockName__element--modifier {}
        //   .block__element-name--modifier-name {}
        //   .My-block {}
        //   .my-block {}
        //   .MyBlock__subblock__element {}
        //   .MyBlock__subblock__element--modifier {}
        //
        //   // - Selecteurs invalides
        //   .block-Name {}
        //   .Block_name {}
        //   .BlockName_element-modifier {}
        //   .0name__element {}
        //   .B__element {}
        //   .b__element {}
        //   .Block__ele_ment {}
        //   ```
        //
        // @see https://stylelint.io/user-guide/rules/selector-class-pattern
        'selector-class-pattern': [
            (() => {
                // @see https://regex101.com/r/ufksHO/2
                const BLOCK = '(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+(?:-[a-z0-9]+)*)';

                // @see https://regex101.com/r/8g3k8D/3
                const WORD = '[a-z0-9]+(?:-[a-z0-9]+)*';
                return `^${BLOCK}(?:__${WORD})*(?:--${WORD})?$`;
            })(),
            { resolveNestedSelectors: true, message: `Invalid BEM selector.` },
        ],

        // - Les selecteurs d'ids doivent être en "hyphenated lowercase".
        //   Ils ne doivent pas commencer par un chiffre et finir par un tiret.
        //   (e.g. `#mon-selecteur`)
        // @see https://stylelint.io/user-guide/rules/selector-id-pattern
        // @see https://regex101.com/r/3WVokQ/1
        'selector-id-pattern': /^(?:[a-z][a-z0-9]*)(?:-{1,2}[a-z0-9]+)*$/,

        // - Lorsque plusieurs selecteurs sont sur la même ligne (ce qui ne devrait pas arriver),
        //   il devrait y avoir un espace après la virgule entre chaque selecteur.
        // @see https://stylelint.io/user-guide/rules/selector-list-comma-space-after
        'selector-list-comma-space-after': 'always-single-line',

        // @see https://stylelint.io/user-guide/rules/selector-max-compound-selectors
        'selector-max-compound-selectors': 3,

        // - Limite à 1 le nombre d'attribut dans un selecteur.
        // @see https://stylelint.io/user-guide/rules/selector-max-attribute
        'selector-max-attribute': 1,

        // - Limite à 5 le nombre de classe dans un selecteur. (e.g. `.foo.bar .baz > .buz`)
        // @see https://stylelint.io/user-guide/rules/selector-max-class
        'selector-max-class': 5,

        // - Limite à 4 le nombre de "combinateurs" dans un selecteur. (e.g. `.foo .bar > .baz`)
        // @see https://stylelint.io/user-guide/rules/selector-max-combinators
        'selector-max-combinators': 4,

        // - Limite à 1 le nombre d'ids dans un selecteur (e.g. `#foo #bar`)
        //   (Notons que s'il y en a pas du tout c'est encore mieux)
        // @see https://stylelint.io/user-guide/rules/selector-max-id
        'selector-max-id': 0,

        // - Limite à 3 le nombre de pseudo-classes dans une sélécteur. (e.g. `.foo:hover:active:focus`)
        // @see https://stylelint.io/user-guide/rules/selector-max-pseudo-class
        'selector-max-pseudo-class': 3,

        // - Empêche l'utilisation des selecteurs de type (e.g. `a {}`, 'html {}')
        // @see https://stylelint.io/user-guide/rules/selector-max-type
        'selector-max-type': [0, {
            ignore: ['compounded'],
            message: `Type selectors are not allowed.`,
        }],

        // - Empêche l'utilisation du selecteur universel. (e.g. `.btn *`)
        // @see https://stylelint.io/user-guide/rules/selector-max-universal
        'selector-max-universal': [0, {
            message: `Universal selectors are not allowed.`,
        }],

        // - Empêche l'utilisation d'un prefixe de type devant les selecteurs. (e.g. `a.link`)
        //   La règle est toutefois désactivé pour les attributs (`input[type=text]`)
        // @see https://stylelint.io/user-guide/rules/selector-no-qualifying-type
        'selector-no-qualifying-type': [true, {
            ignore: ['attribute'],
        }],

        // - Des quotes simples doivent être utilisées.
        // @see https://stylelint.io/user-guide/rules/string-quotes
        'string-quotes': 'single',

        // - Le temps minimum appliqué dans les animations, transitions, etc. doit être de 100ms.
        //   (sauf pour les delais (e.g. `transition-delay`))
        // @see https://stylelint.io/user-guide/rules/time-min-milliseconds
        'time-min-milliseconds': [100, {
            ignore: ['delay'],
        }],

        // - Limite les unités autorisées pour l'homogénéité du code.
        // @see https://stylelint.io/user-guide/rules/unit-allowed-list
        'unit-allowed-list': ['px', 'pt', 'mm', 'em', 'rem', '%', 'deg', 'vh', 'vw', 'ms'],

        // - Les mots-clés valeurs doivent être en minuscules.
        // @see https://stylelint.io/user-guide/rules/value-keyword-case
        'value-keyword-case': ['lower', {
            // - Ignore les variables (faux positifs avec les noms de police dans les variables)
            ignoreProperties: [/^\$/],
        }],

        // - S'assure de l'absence de BOM.
        // @see https://stylelint.io/user-guide/rules/unicode-bom
        'unicode-bom': 'never',

        // - Interdit l'utilisation de certaines unités.
        //   (cf. https://developer.mozilla.org/fr/docs/Web/CSS/Types_CSS pour les unités)
        // @see https://stylelint.io/user-guide/rules/unit-disallowed-list
        'unit-disallowed-list': [
            'rad', 'vmin', 'vmax', 'cm', 'ex',
            'pc', 'in', 'ch', 'ic', 'rlh',
            'vi', 'vb', 'q', 'mozmm', 'cap', 'turn',
            'grad', 'dpi', 'dpcm', 'dppx',
        ],

        //
        // - Disabled rules
        //

        // @see https://stylelint.io/user-guide/rules/at-rule-disallowed-list
        'at-rule-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/at-rule-name-newline-after
        'at-rule-name-newline-after': null,

        // @see https://stylelint.io/user-guide/rules/at-rule-allowed-list
        'at-rule-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
        'block-opening-brace-newline-before': null,

        // @see https://stylelint.io/user-guide/rules/block-closing-brace-space-after
        'block-closing-brace-space-after': null,

        // @see https://stylelint.io/user-guide/rules/color-no-hex
        'color-no-hex': null,

        // @see https://stylelint.io/user-guide/rules/comment-pattern
        'comment-pattern': null,

        // - Disabled because of rtlcss that uses /*rtl:ignore*/ comments ...
        // @see https://stylelint.io/user-guide/rules/comment-whitespace-inside
        'comment-whitespace-inside': null,

        // @see https://stylelint.io/user-guide/rules/comment-word-disallowed-list
        'comment-word-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
        'declaration-block-semicolon-newline-before': null,

        // @see https://stylelint.io/user-guide/rules/declaration-empty-line-before
        'declaration-empty-line-before': null,

        // @see https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
        'declaration-property-value-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list
        'declaration-property-value-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/
        'declaration-property-unit-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/function-disallowed-list
        'function-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/function-comma-newline-before
        'function-comma-newline-before': null,

        // @see https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
        'function-url-no-scheme-relative': null,

        // @see https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list
        'function-url-scheme-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list
        'function-url-scheme-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/function-allowed-list
        'function-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list
        'media-feature-name-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list
        'media-feature-name-value-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/media-feature-name-allowed-list
        'media-feature-name-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
        'media-query-list-comma-newline-before': null,

        // @see https://stylelint.io/user-guide/rules/no-descending-specificity
        'no-descending-specificity': null,

        // @see https://stylelint.io/user-guide/rules/no-unknown-animations
        'no-unknown-animations': null,

        // @see https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
        'order/properties-alphabetical-order': null,

        // @see https://stylelint.io/user-guide/rules/property-disallowed-list
        'property-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/property-allowed-list
        'property-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/list/rule-selector-property-disallowed-list
        'rule-selector-property-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list
        'selector-attribute-name-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list
        'selector-attribute-operator-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list
        'selector-attribute-operator-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list
        'selector-combinator-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-combinator-allowed-list
        'selector-combinator-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/list/selector-disallowed-list/
        'selector-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
        'selector-list-comma-newline-before': null,

        // @see https://stylelint.io/user-guide/rules/selector-max-specificity
        'selector-max-specificity': null,

        // @see https://stylelint.io/user-guide/rules/selector-nested-pattern
        'selector-nested-pattern': null,

        // @see https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list
        'selector-pseudo-class-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list
        'selector-pseudo-class-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list
        'selector-pseudo-element-disallowed-list': null,

        // @see https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list
        'selector-pseudo-element-allowed-list': null,

        // @see https://stylelint.io/user-guide/rules/value-list-comma-newline-before
        'value-list-comma-newline-before': null,
    },
    reportNeedlessDisables: true,
};
