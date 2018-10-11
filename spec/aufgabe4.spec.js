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
  xit('should call the back with a given param after 400ms', done => {
    const cb = jasmine.createSpy();
    async(cb, value, timeout);
    setTimeout(() => {
      expect(cb).toHaveBeenCalledWith(value);
      done();
    }, timeout);
  });

  describe('fake clock', () => {
    beforeEach(() => jasmine.clock().install());

    afterEach(() => jasmine.clock().uninstall());

    it('should call the back with a given param with fake clock', () => {
      jasmine.clock().mockDate(new Date('01-01-1984'));
      const cb = jasmine.createSpy('🐙');
      console.log(new Date().toString());

      async(cb, value, timeout);

      jasmine.clock().tick(timeout);

      expect(cb).toHaveBeenCalledWith(value);
    });
  });
});
