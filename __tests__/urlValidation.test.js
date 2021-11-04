const url = require('../src/client/js/urlValidation.js');
window.alert = jest.fn();

describe('validateURl', () => {
    test('test empty url validation', () => {
        expect(url.validateURL('')).toBeFalsy();
        window.alert.mockClear();
        
    })
});

describe('validateURl', () => {
    test('test rgx url validation', () => {
        expect(url.validateURL('google.com')).toBeFalsy();
        window.alert.mockClear();
    })
});