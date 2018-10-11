describe('getRandomNumber4b', () => {
  it('should return a number', () => {
    const result = getRandomNumber();
    expect(result).toEqual(jasmine.any(Number));
  });
  it('should call Math.random', () => {
    spyOn(Math, 'random');
    getRandomNumber();
    expect(Math.random).toHaveBeenCalled();
  });
});
