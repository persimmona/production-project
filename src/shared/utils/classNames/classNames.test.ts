import { classNames } from './classNames';

describe('classNames', () => {
    test('with first parameter', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additionalClasses', () => {
        const expected = 'class1 class2';
        expect(classNames('class1', {}, ['class2'])).toBe(expected);
    });

    test('with modes equal true', () => {
        const expected = 'class1 hover selected';
        expect(classNames('class1', { hover: true, selected: true })).toBe(expected);
    });

    test('with modes equal false', () => {
        const expected = 'class1 hover';
        expect(classNames('class1', { hover: true, selected: false })).toBe(expected);
    });

    test('with modes equal undefinded', () => {
        const expected = 'class1 hover';
        expect(classNames('class1', { hover: true, selected: undefined })).toBe(expected);
    });
});
