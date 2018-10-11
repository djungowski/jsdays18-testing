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
  it('should return a number and call Math.random', () => {
    // gib einen definierten Wert zurück
    //spyOn(Math, 'random').and.returnValue(0.2);
    // ruf die originalfunktion auf
    //spyOn(Math, 'random').and.callThrough();
    // ruf eine andere Funktion auf
    //spyOn(Math, 'random').and.callFake(() => 0.1);

    const spy = spyOn(Math, 'random');
    spy.and.callFake(() => 0.1);

    const result = getRandomNumber();
    expect(Math.random).toHaveBeenCalled();
    expect(result).toEqual(jasmine.any(Number));
  });
});
