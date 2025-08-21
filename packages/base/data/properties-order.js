export default [
    'all',
    'content',

    //
    // - Positioning
    //

    'position',
    'z-index',
    'inset',
    'top',
    'left',
    'bottom',
    'right',

    //
    // - Flex
    //

    'order',
    'flex',
    {
        order: 'flexible',
        properties: [
            'flex-grow',
            'flex-shrink',
            'flex-basis',
        ],
    },

    //
    // -  Display & Box Model
    //

    'display',

    'flex-flow',
    'flex-direction',
    'flex-wrap',

    'place-items',
    'place-content',

    'align-self',
    'align-items',
    'justify-content',

    'overflow',
    'overflow-x',
    'overflow-y',
    'box-sizing',

    'width',
    'height',
    'max-width',
    'min-width',
    'max-height',
    'min-height',

    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',

    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',

    'outline',
    'outline-width',
    'outline-style',
    'outline-color',
    'outline-offset',

    'border',
    'border-width',
    'border-style',
    'border-color',

    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',

    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',

    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',

    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',

    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',

    //
    // - Colors
    //

    'background',
    'background-color',
    'background-image',
    'background-position',
    'background-repeat',
    'background-size',
    'background-origin',
    'background-attachment',
    'background-clip',
    'color',

    //
    // - Text
    //

    'font',
    'font-family',
    'font-size',
    'font-smoothing',
    'font-variant',
    'font-weight',
    'font-style',
    {
        order: 'flexible',
        properties: [
            'line-height',
            'letter-spacing',
            'text-align',
            'text-decoration',
        ],
    },
];
