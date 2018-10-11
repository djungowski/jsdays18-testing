describe('getRandomNumber4c', () => {
  it('should return 4', () => {
    spyOn(Math, 'random').and.returnValue(0.4123);

    const result = getRandomNumber4c();

    expect(result).toBe(4);
  });

  it('should check if Math.floor was called with 0.4123', () => {
    spyOn(Math, 'floor');
    spyOn(Math, 'random').and.returnValue(0.4123);

    getRandomNumber4c();

    expect(Math.floor).toHaveBeenCalledWith(4.123);
  });

  it('should check if Math.floor was called with 0.4123 and it returns 4', () => {
    spyOn(Math, 'floor').and.callThrough();
    spyOn(Math, 'random').and.returnValue(0.32);

    const result = getRandomNumber4c();

    expect(result).toBe(3);
    expect(Math.floor).toHaveBeenCalledWith(3.2);
  });
});
