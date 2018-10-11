describe('aufgabe 2', () => {
  it('should return a function', () => {
    const result = returnsSomeFunction();
    expect(result).toEqual(jasmine.any(Function));
  });
});
