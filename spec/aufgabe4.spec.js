describe('aufgabe 4', () => {
  const value = 'Hallo Welt';
  const timeout = 400;
  xit('should call the back', () => {
    const cb = jasmine.createSpy();
    async(cb);
    expect(cb).toHaveBeenCalled();
  });

  xit('should call the back with a given param', () => {
    const cb = jasmine.createSpy();
    async(cb, value);
    expect(cb).toHaveBeenCalledWith(value);
  });

  it('should call the back with a given param after 400ms', () => {
    const cb = jasmine.createSpy();
    async(cb, value, timeout);
    setTimeout(() => {
      expect(cb).toHaveBeenCalledWith(value);
    }, timeout);
  });
});
