import propertiesOrderData from './data/properties-order.js';

export default {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
        '@stylistic/stylelint-plugin',
        'stylelint-order',
    ],
    rules: {
        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-case
        '@stylistic/at-rule-name-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-space-after
        '@stylistic/at-rule-name-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-newline-after
        '@stylistic/at-rule-semicolon-newline-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-semicolon-space-before
        '@stylistic/at-rule-semicolon-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-empty-line-before
        '@stylistic/block-closing-brace-empty-line-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after
        '@stylistic/block-closing-brace-newline-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-before
        '@stylistic/block-closing-brace-newline-before': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-before
        '@stylistic/block-closing-brace-space-before': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-after
        '@stylistic/block-opening-brace-newline-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-after
        '@stylistic/block-opening-brace-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-space-before
        '@stylistic/block-opening-brace-space-before': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/color-hex-case
        '@stylistic/color-hex-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-after
        '@stylistic/declaration-bang-space-after': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-bang-space-before
        '@stylistic/declaration-bang-space-before': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-after
        '@stylistic/declaration-block-semicolon-newline-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-after
        '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-space-before
        '@stylistic/declaration-block-semicolon-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-trailing-semicolon
        '@stylistic/declaration-block-trailing-semicolon': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-after
        '@stylistic/declaration-colon-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-space-before
        '@stylistic/declaration-colon-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-after
        '@stylistic/function-comma-newline-after': 'always-multi-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-after
        '@stylistic/function-comma-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-space-before
        '@stylistic/function-comma-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-max-empty-lines
        '@stylistic/function-max-empty-lines': 0,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-newline-inside
        '@stylistic/function-parentheses-newline-inside': 'always-multi-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-parentheses-space-inside
        '@stylistic/function-parentheses-space-inside': 'never-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-whitespace-after
        '@stylistic/function-whitespace-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/indentation
        '@stylistic/indentation': 4,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/linebreaks
        '@stylistic/linebreaks': 'unix',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-empty-lines
        '@stylistic/max-empty-lines': 1,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/max-line-length
        '@stylistic/max-line-length': [120, { ignore: ['comments'] }],

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-after
        '@stylistic/media-feature-colon-space-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-colon-space-before
        '@stylistic/media-feature-colon-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-name-case
        '@stylistic/media-feature-name-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-parentheses-space-inside
        '@stylistic/media-feature-parentheses-space-inside': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-after
        '@stylistic/media-feature-range-operator-space-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-feature-range-operator-space-before
        '@stylistic/media-feature-range-operator-space-before': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-after
        '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-after
        '@stylistic/media-query-list-comma-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-space-before
        '@stylistic/media-query-list-comma-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-empty-first-line
        '@stylistic/no-empty-first-line': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-eol-whitespace
        '@stylistic/no-eol-whitespace': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-extra-semicolons
        '@stylistic/no-extra-semicolons': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/no-missing-end-of-source-newline
        '@stylistic/no-missing-end-of-source-newline': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-leading-zero
        '@stylistic/number-leading-zero': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/number-no-trailing-zeros
        '@stylistic/number-no-trailing-zeros': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/property-case
        '@stylistic/property-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-brackets-space-inside
        '@stylistic/selector-attribute-brackets-space-inside': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-after
        '@stylistic/selector-attribute-operator-space-after': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-attribute-operator-space-before
        '@stylistic/selector-attribute-operator-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-after
        '@stylistic/selector-combinator-space-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-combinator-space-before
        '@stylistic/selector-combinator-space-before': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-descendant-combinator-no-non-space
        '@stylistic/selector-descendant-combinator-no-non-space': true,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-after
        '@stylistic/selector-list-comma-newline-after': 'always',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-after
        '@stylistic/selector-list-comma-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-space-before
        '@stylistic/selector-list-comma-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-max-empty-lines
        '@stylistic/selector-max-empty-lines': 0,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-case
        '@stylistic/selector-pseudo-class-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside
        '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-pseudo-element-case
        '@stylistic/selector-pseudo-element-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/string-quotes
        '@stylistic/string-quotes': 'single',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unicode-bom
        '@stylistic/unicode-bom': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/unit-case
        '@stylistic/unit-case': 'lower',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-after
        '@stylistic/value-list-comma-newline-after': 'always-multi-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-after
        '@stylistic/value-list-comma-space-after': 'always-single-line',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-space-before
        '@stylistic/value-list-comma-space-before': 'never',

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-max-empty-lines
        '@stylistic/value-list-max-empty-lines': 0,

        // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-same-name-blockless',
                'first-nested',
            ],
            ignore: ['after-comment'],
            ignoreAtRules: ['if', 'else', 'return', 'content', 'import', 'use', 'forward'],
        }],

        // https://stylelint.io/user-guide/rules/at-rule-property-requirelist/
        'at-rule-property-required-list': {
            'font-face': ['font-family', 'font-weight', 'font-style', 'src'],
        },

        // https://stylelint.io/user-guide/rules/block-no-empty/
        'block-no-empty': true,

        // https://stylelint.io/user-guide/rules/color-function-notation/
        'color-function-notation': ['modern', {
            ignore: ['with-var-inside'],
        }],

        // https://stylelint.io/user-guide/rules/list/color-hex-alpha/
        'color-hex-alpha': 'never',

        // https://stylelint.io/user-guide/rules/color-named/
        'color-named': 'never',

        // https://stylelint.io/user-guide/rules/color-no-invalid-hex/
        'color-no-invalid-hex': true,

        // https://stylelint.io/user-guide/rules/container-name-pattern/
        // @see https://regex101.com/r/04loin/1
        'container-name-pattern': [/^(?:[a-z][a-z0-9]+(?:-{1,2}[a-z0-9]+)*|[A-Z][a-zA-Z0-9]+(?:-{1,2}[a-zA-Z0-9]+)*)$/, {
            message: (
                'Use either kebab-case or PascalCase names (optionally scoped) for the container names ' +
                '(e.g. `@container foo {}`, `@container FooBar {}`, `@container MyScope--foo {}`, ...)'
            ),
        }],

        // https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/
        'custom-property-no-missing-var-function': true,

        // https://stylelint.io/user-guide/rules/custom-property-pattern/
        // @see https://regex101.com/r/geT0Zw/1
        'custom-property-pattern': [/^(?:[a-z][a-z0-9]+(?:-{1,2}[a-z0-9]+)*|[A-Z][a-zA-Z0-9]+-(?:-[a-z0-9]+)+)$/, {
            message: (
                'Use kebab-case or PascalCase names (optionally scoped) for the custom properties ' +
                '(e.g. `--foo: #fff;`, `--foo-bar: #fff;` or `--scope--foo: #fff;` / `--MyScope--foo: #fff;`)'
            ),
        }],

        // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates-with-same-prefixless-values'],
        }],

        // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
        'declaration-block-no-redundant-longhand-properties': [true, {
            ignoreShorthands: ['border-image'],
        }],

        // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
        'declaration-block-single-line-max-declarations': 0,

        // https://stylelint.io/user-guide/rules/declaration-no-important/
        'declaration-no-important': true,

        // https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated/
        'declaration-property-value-keyword-no-deprecated': [true, {
            ignoreKeywords: ['break-word'],
        }],

        // https://stylelint.io/user-guide/rules/font-weight-notation/
        'font-weight-notation': 'numeric',

        // https://stylelint.io/user-guide/rules/function-disallowed-list/
        'function-disallowed-list': ['rgba', 'hsla'],

        // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
        'function-linear-gradient-no-nonstandard-direction': true,

        // https://stylelint.io/user-guide/rules/function-no-unknown/
        'function-no-unknown': true,

        // https://stylelint.io/user-guide/rules/keyframes-name-pattern/
        // @see https://regex101.com/r/04loin/1
        'keyframes-name-pattern': [/^(?:[a-z][a-z0-9]+(?:-{1,2}[a-z0-9]+)*|[A-Z][a-zA-Z0-9]+(?:-{1,2}[a-zA-Z0-9]+)*)$/, {
            message: (
                'Use either kebab-case or PascalCase names (optionally scoped) for the keyframes ' +
                '(e.g. `@keyframes foo {}`, `@keyframes FooBar {}`, `@keyframes MyScope--foo {}`, ...)'
            ),
        }],

        // https://stylelint.io/user-guide/rules/layer-name-pattern/
        // @see https://regex101.com/r/04loin/1
        'layer-name-pattern': [/^(?:[a-z][a-z0-9]+(?:-{1,2}[a-z0-9]+)*|[A-Z][a-zA-Z0-9]+(?:-{1,2}[a-zA-Z0-9]+)*)$/, {
            message: (
                'Use either kebab-case or PascalCase names (optionally scoped) for the layer names ' +
                '(e.g. `@layer foo {}`, `@layer FooBar {}`, `@layer MyScope--foo {}`, ...)'
            ),
        }],

        // https://stylelint.io/user-guide/rules/no-duplicate-selectors/
        'no-duplicate-selectors': true,

        // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
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

        // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
        'order/properties-order': [propertiesOrderData, { unspecified: 'bottom' }],

        // https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
        'plugin/declaration-block-no-ignored-properties': true,

        // https://stylelint.io/user-guide/rules/property-no-unknown/
        'property-no-unknown': [true, {
            checkPrefixed: true,
            ignoreProperties: [],
            ignoreSelectors: [],
            ignoreAtRules: [],
        }],

        // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
        'property-no-vendor-prefix': [true, {
            ignoreProperties: ['box-orient', 'appearance'],
        }],

        // https://stylelint.io/user-guide/rules/rule-empty-line-before/
        'rule-empty-line-before': ['always-multi-line', {
            except: ['first-nested'],
            ignore: ['after-comment'],
        }],

        // https://stylelint.io/user-guide/rules/selector-class-pattern/
        'selector-class-pattern': [
            (() => {
                // @see https://regex101.com/r/qGcwwl/1
                const BLOCK = '(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]*(?:-[a-z0-9]+)*)';

                // @see https://regex101.com/r/8g3k8D/3
                const WORD = '[a-z0-9]+(?:-[a-z0-9]+)*';
                return `^${BLOCK}(?:__${WORD})*(?:--${WORD})?$`;
            })(),
            {
                resolveNestedSelectors: true,
                message: (
                    'Use either kebab-case or PascalCase BEM names for the selectors ' +
                    '(e.g. `.Foo {}`, `.Foo__bar {}`, `.foo__bar {}`, `.Foo__bar--active {}`, ...)'
                ),
            },
        ],

        // https://stylelint.io/user-guide/rules/selector-id-pattern/
        // @see https://regex101.com/r/kpYO1q/1
        'selector-id-pattern': [/^[a-z][a-z0-9]+(?:-{1,2}[a-z0-9]+)*$/, {
            message: (
                'Use kebab-case (optionally scoped) names for the ids ' +
                '(e.g. `#foo {}`, `#foo-bar {}` or `#scope--foo {}`)'
            ),
        }],

        // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
        'selector-max-compound-selectors': 3,

        // https://stylelint.io/user-guide/rules/selector-max-id/
        'selector-max-id': 0,

        // https://stylelint.io/user-guide/rules/selector-max-type/
        'selector-max-type': [0, {
            ignore: ['compounded'],
            message: `Type selectors are not allowed.`,
        }],

        // https://stylelint.io/user-guide/rules/selector-max-universal/
        'selector-max-universal': [0, {
            message: `Universal selectors are not allowed.`,
        }],

        // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
        'selector-no-qualifying-type': [true, {
            ignore: ['attribute'],
        }],

        // https://stylelint.io/user-guide/rules/time-min-milliseconds/
        'time-min-milliseconds': [100, {
            ignore: ['delay'],
        }],

        // https://stylelint.io/user-guide/rules/unit-allowed-list/
        'unit-allowed-list': ['em', 'rem', 'px', 'pt', 'mm', 'vh', 'vw', 'ms', '%', 'deg', 'fr'],

        // https://stylelint.io/user-guide/rules/unit-no-unknown/
        'unit-no-unknown': true,

        // https://stylelint.io/user-guide/rules/value-keyword-case/
        'value-keyword-case': ['lower', {
            // - Ignore les variables (faux positifs avec les noms de police dans les variables)
            ignoreProperties: [/^\$/],
            camelCaseSvgKeywords: true,
        }],

        // https://stylelint.io/user-guide/rules/unit-disallowed-list/
        'unit-disallowed-list': [
            'rad', 'vmin', 'vmax', 'cm', 'ex',
            'pc', 'in', 'ch', 'ic', 'rlh',
            'vi', 'vb', 'q', 'mozmm', 'cap', 'turn',
            'grad', 'dpi', 'dpcm', 'dppx',
        ],

        //
        // - Règles désactivées
        //

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/at-rule-name-newline-after
        '@stylistic/at-rule-name-newline-after': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-space-after
        '@stylistic/block-closing-brace-space-after': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-opening-brace-newline-before
        '@stylistic/block-opening-brace-newline-before': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-block-semicolon-newline-before
        '@stylistic/declaration-block-semicolon-newline-before': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/declaration-colon-newline-after
        '@stylistic/declaration-colon-newline-after': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/function-comma-newline-before
        '@stylistic/function-comma-newline-before': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/media-query-list-comma-newline-before
        '@stylistic/media-query-list-comma-newline-before': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/named-grid-areas-alignment
        '@stylistic/named-grid-areas-alignment': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/selector-list-comma-newline-before
        '@stylistic/selector-list-comma-newline-before': null,

        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/value-list-comma-newline-before
        '@stylistic/value-list-comma-newline-before': null,

        // https://stylelint.io/user-guide/rules/at-rule-disallowed-list/
        'at-rule-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/at-rule-allowed-list/
        'at-rule-allowed-list': null,

        // https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules
        'block-no-redundant-nested-style-rules': null,

        // https://stylelint.io/user-guide/rules/color-no-hex/
        'color-no-hex': null,

        // https://stylelint.io/user-guide/rules/comment-pattern/
        'comment-pattern': null,

        // - Disabled because of rtlcss that uses /*rtl:ignore*/ comments ...
        // https://stylelint.io/user-guide/rules/comment-whitespace-inside/
        'comment-whitespace-inside': null,

        // https://stylelint.io/user-guide/rules/comment-word-disallowed-list/
        'comment-word-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
        'declaration-empty-line-before': null,

        // https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/
        'declaration-property-value-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/list/declaration-property-max-values/
        'declaration-property-max-values': null,

        // https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/
        'declaration-property-unit-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/
        'declaration-property-unit-allowed-list': null,

        // https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list/
        'declaration-property-value-allowed-list': null,

        // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
        'function-url-no-scheme-relative': null,

        // https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list/
        'function-url-scheme-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list/
        'function-url-scheme-allowed-list': null,

        // https://stylelint.io/user-guide/rules/function-allowed-list/
        'function-allowed-list': null,

        // https://stylelint.io/user-guide/rules/max-nesting-depth/
        'max-nesting-depth': null,

        // https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list/
        'media-feature-name-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list/
        'media-feature-name-value-allowed-list': null,

        // https://stylelint.io/user-guide/rules/media-feature-name-allowed-list/
        'media-feature-name-allowed-list': null,

        // https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list/
        'media-feature-name-unit-allowed-list': null,

        // https://stylelint.io/user-guide/rules/no-descending-specificity/
        'no-descending-specificity': null,

        // https://stylelint.io/user-guide/rules/no-unknown-animations/
        'no-unknown-animations': null,

        // https://stylelint.io/user-guide/rules/no-unknown-custom-media/
        'no-unknown-custom-media': null,

        // https://stylelint.io/user-guide/rules/no-unknown-custom-properties/
        'no-unknown-custom-properties': null,

        // https://stylelint.io/user-guide/rules/number-max-precision/
        'number-max-precision': null,

        // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
        'order/properties-alphabetical-order': null,

        // https://stylelint.io/user-guide/rules/property-disallowed-list/
        'property-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/property-allowed-list/
        'property-allowed-list': null,

        // https://stylelint.io/user-guide/rules/list/rule-selector-property-disallowed-list/
        'rule-selector-property-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/
        'selector-attribute-name-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list/
        'selector-attribute-operator-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list/
        'selector-attribute-operator-allowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list/
        'selector-combinator-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-combinator-allowed-list/
        'selector-combinator-allowed-list': null,

        // https://stylelint.io/user-guide/rules/list/selector-disallowed-list/
        'selector-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-max-attribute/
        'selector-max-attribute': null,

        // https://stylelint.io/user-guide/rules/selector-max-class/
        'selector-max-class': null,

        // https://stylelint.io/user-guide/rules/selector-max-combinators/
        'selector-max-combinators': null,

        // https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
        'selector-max-pseudo-class': null,

        // https://stylelint.io/user-guide/rules/selector-max-specificity/
        'selector-max-specificity': null,

        // https://stylelint.io/user-guide/rules/selector-nested-pattern/
        'selector-nested-pattern': null,

        // https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list/
        'selector-pseudo-class-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list/
        'selector-pseudo-class-allowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list/
        'selector-pseudo-element-disallowed-list': null,

        // https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list/
        'selector-pseudo-element-allowed-list': null,
    },
    reportNeedlessDisables: true,
};
