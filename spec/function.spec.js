describe('returnSomeFunction', () => {
  const value = 'Hallo 🦄';

  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('should return a func that triggers console.log', () => {
    const func = returnSomeOtherFunction(value);
    func();

    expect(console.log).toHaveBeenCalled();
  });

  it('should return a func that triggers console.log with a value', () => {
    const func = returnSomeOtherFunction(value);
    func();

    expect(console.log).toHaveBeenCalledWith(value);
  });
});
