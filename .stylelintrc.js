const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
    extends: ['stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],
    rules: {
        indentation: [4],
        'color-hex-case': 'upper',
        'selector-class-pattern': null,
        'declaration-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
            },
        ],
        'order/order': selectorOrdering, // to fine-tune configuration use selectorOrderFactory
        'order/properties-order': propertyOrdering,
    },
};
