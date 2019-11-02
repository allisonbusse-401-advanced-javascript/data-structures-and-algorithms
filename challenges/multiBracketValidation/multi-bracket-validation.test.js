const bracketValidator = require('./multi-bracket-validation');

describe('Bracket Validator', () => {
  it('validates all brackets have closing sets and are in the proper order', () => {
    expect(bracketValidator('{}')).toBe(true);
    expect(bracketValidator('{}(){}')).toBe(true);
    expect(bracketValidator('()[[Extra Characters]]')).toBe(true);
    expect(bracketValidator('{}{Code}[Fellows](())')).toBe(true);
    expect(bracketValidator('[({}]')).toBe(false);
    expect(bracketValidator('(](')).toBe(false);
    expect(bracketValidator('{(})')).toBe(false);
  });
});