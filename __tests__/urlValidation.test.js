const url = require('../src/client/js/urlValidation.js');

describe('validateURl', () => {
    it('should return false if input is empty', () => {
        window.alert = jest.fn();

        const result = url.validateURL('');
        expect(result).toBe(false);

        expect(window.alert).toHaveBeenCalled();
        expect(window.alert.mock.calls[0][0]).toContain('empty');
    })

    it('should resturn false if rgx test is false', () => {
        window.alert = jest.fn();

        const result = url.validateURL('google.com');
        expect(result).toBe(false);

        expect(window.alert).toHaveBeenCalled();
        expect(window.alert.mock.calls[0][0]).toContain('http');
    })
});