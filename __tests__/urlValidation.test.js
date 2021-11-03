const url = require('../src/client/js/urlValidation.js');

describe('validateURl', () => {
    test('test empty url validation', () => {
        expect(url.validateURL('')).toBeFalsy();
    })
});

describe('validateURl', () => {
    test('test rgx url validation', () => {
        expect(url.validateURL('google.com')).toBeFalsy();
    })
});