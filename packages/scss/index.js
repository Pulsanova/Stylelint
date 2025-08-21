import postcssScssSyntax from 'postcss-scss';

export default {
    customSyntax: postcssScssSyntax,
    extends: '@pulsanova/stylelint-config-base',
    plugins: ['stylelint-scss'],
    rules: {
        // https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/lib/rules/block-closing-brace-newline-after
        '@stylistic/block-closing-brace-newline-after': ['always', {
            ignoreAtRules: ['if', 'else'],
        }],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [true, {
            ignoreAtRules: [],
        }],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-property-value-no-unknown/README.md
        'declaration-property-value-no-unknown': null,
        'scss/declaration-property-value-no-unknown': true,

        // https://stylelint.io/user-guide/rules/list/import-notation/
        'import-notation': 'string',

        // https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule/
        'no-invalid-position-at-import-rule': [true, {
            ignoreAtRules: ['use'],
        }],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/property-no-unknown/README.md
        'property-no-unknown': null,
        'scss/property-no-unknown': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
        'scss/at-each-key-value-single-line': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md
        'scss/at-else-closing-brace-space-after': 'always-intermediate',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md
        'scss/at-else-empty-line-before': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md
        'scss/at-else-if-parentheses-space-before': 'always',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
        'scss/at-extend-no-missing-placeholder': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md
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

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md
        // @see https://regex101.com/r/Sa87MB/4
        'scss/at-function-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,
        'scss/at-mixin-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,
        'scss/percent-placeholder-pattern': /^_?(?:(?:[A-Z][a-zA-Z0-9]+|[a-z][a-z0-9]+)(?:-[a-z0-9]+)*)$/,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md
        'scss/at-function-parentheses-space-before': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md
        'scss/at-if-closing-brace-space-after': 'always-intermediate',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-disallowed-list/README.md
        'scss/at-import-partial-extension-disallowed-list': ['scss'],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
        'scss/at-mixin-argumentless-call-parentheses': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md
        'scss/at-mixin-named-arguments': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md
        'scss/at-mixin-parentheses-space-before': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-root-no-redundant/README.md
        'scss/at-root-no-redundant': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-redundant-alias/README.md
        'scss/at-use-no-redundant-alias': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
        'scss/declaration-nested-properties': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md
        'scss/declaration-nested-properties-no-divided-groups': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
        'scss/dimension-no-non-numeric-values': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
        'scss/dollar-variable-colon-space-after': 'always-single-line',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md
        'scss/dollar-variable-colon-space-before': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md
        'scss/dollar-variable-first-in-block': [true, {
            ignore: ['comments', 'imports'],
            // Note: Exception pour les variables "racine" car il y a un faux positif avec @charset.
            except: ['root'],
        }],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
        'scss/dollar-variable-no-missing-interpolation': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment/README.md
        'scss/dollar-variable-no-namespaced-assignment': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
        // @see https://regex101.com/r/EmOM1V/7
        'scss/dollar-variable-pattern': [/^_?[a-z][a-z0-9]+(?:-[a-z0-9]+)*$/, {
            ignore: 'local',
            message: 'Use kebab-case names for the variables (e.g. `$variable` or `$my-variable`)',
        }],

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md
        'scss/double-slash-comment-whitespace-inside': 'always',

        // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/function-color-channel/README.md
        'scss/function-color-channel': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
        'scss/function-quote-no-quoted-strings-inside': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
        'scss/function-unquote-no-unquoted-strings-inside': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore/README.md
        'scss/load-no-partial-leading-underscore': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-partial-extension/README.md
        'scss/load-partial-extension': 'never',

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-load-rules/README.md
        'scss/no-duplicate-load-rules': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
        'scss/no-duplicate-mixins': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
        'scss/no-global-function-names': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-unused-private-members/README.md
        'scss/no-unused-private-members': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
        'scss/operator-no-newline-before': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md
        'scss/operator-no-unspaced': true,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
        'scss/selector-no-redundant-nesting-selector': true,

        //
        // - Règles désactivées
        //

        // - Faux positifs avec les conditions SCSS (e.g. `background-image: if($foo != 'none', url($foo), none);`).
        // https://stylelint.io/user-guide/rules/list/annotation-no-unknown/
        'annotation-no-unknown': null,

        // https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown/
        'at-rule-descriptor-no-unknown': null,

        // https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown/
        'at-rule-descriptor-value-no-unknown': null,

        // https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid/
        'at-rule-prelude-no-invalid': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown/README.md
        'function-no-unknown': null,
        'scss/function-no-unknown': null,

        // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown/
        'media-feature-name-value-no-unknown': null,

        // https://stylelint.io/user-guide/rules/media-query-no-invalid/
        'media-query-no-invalid': null,

        // https://stylelint.io/user-guide/rules/nesting-selector-no-missing-scoping-root
        'nesting-selector-no-missing-scoping-root': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
        'scss/at-if-no-null': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-allowed-list/README.md
        'scss/at-import-partial-extension-allowed-list': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-no-risky-nesting-selector/README.md
        'scss/at-mixin-no-risky-nesting-selector': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
        'scss/at-rule-conditional-no-parentheses': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced/README.md
        'scss/at-use-no-unnamespaced': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/block-no-redundant-nesting/README.md
        'scss/block-no-redundant-nesting': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
        'scss/comment-no-empty': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
        'scss/comment-no-loud': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md
        'scss/dollar-variable-colon-newline-after': null,

        // NOTE: Cette règle est toutefois à activer dans les projets non-finaux (libs, ui-kits, thèmes, ...)
        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md
        'scss/dollar-variable-default': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md
        'scss/dollar-variable-empty-line-after': null,

        // - Désactivé car force l'absence de lignes vides en plus d'imposer les lignes vides avant les variables.
        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
        'scss/dollar-variable-empty-line-before': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md
        'scss/double-slash-comment-empty-line-before': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-inline/README.md
        'scss/double-slash-comment-inline': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-calculation-no-interpolation/README.md
        'scss/function-calculation-no-interpolation': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
        'scss/function-color-relative': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-disallowed-list/README.md
        'scss/function-disallowed-list': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md
        'scss/map-keys-quotes': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
        'scss/media-feature-value-dollar-variable': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md
        'scss/no-dollar-variables': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
        'scss/no-duplicate-dollar-variables': null,

        // @see https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after
        'scss/operator-no-newline-after': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/partial-no-import/README.md
        'scss/partial-no-import': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md
        'scss/selector-nest-combinators': null,

        // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
        'scss/selector-no-union-class-name': null,
    },
};
