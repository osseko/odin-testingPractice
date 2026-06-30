const tests = require('./tests');

test('capitalizes first letter of word', () => {
    expect(capitalize('hello')).toBe('Hello')
})