const fibonacci = require('./fibonacci');

it('calcula el fibonacci de numero dado', () => {
    expect(fibonacci(20)).toEqual(6765);
    expect(fibonacci(8)).toEqual(21);
    expect(fibonacci(15)).toEqual(610);
});