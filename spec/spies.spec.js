describe('Spies', () => {
  it('should ensure a callback is called with exception', () => {
    const cb = () => {
      throw new Error('Booom!');
    };

    expect(() => runcallback(cb)).toThrow();
  });

  it('should ensure a callback is called with triple A', () => {
    const cb = jasmine.createSpy();

    runcallback(cb);

    expect(cb).toHaveBeenCalled();
  });

  it('should check if a callback has been called with a certain value', () => {
    const cb = jasmine.createSpy('mySpy');

    runcallback(cb, 'value');

    expect(cb).toHaveBeenCalledWith('value');
    expect(cb).toHaveBeenCalledTimes(2);
    expect(cb.calls.argsFor(1)).toEqual(['was anderes']);
  });
});

describe('logSomething', () => {
  it('should call console.log', () => {
    const spy = spyOn(console, 'log');
    logSomething('☠️');
    expect(console.log).toHaveBeenCalledWith('☠️');
  });
});
