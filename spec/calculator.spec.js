beforeEach(() => {
  // console.log('outer beforeEach');
});
describe('Calculator', () => {
  let calc;
  // before each test (multiple times)
  beforeEach(() => {
    // Arrange
    calc = new Calculator();
    // console.log('first beforeEach');
  });
  beforeEach(() => {
    // console.log('second beforeEach');
  });
  // before all test (one time)
  // beforeAll(() => console.log('beforeAll'));
  // afterAll(() => console.log('afterAll'));
  // afterEach(() => console.log('afterEach'));

  describe('#add()', () => {
    // beforeEach(() => console.log('before each add'));
    it('should add 1 and 1 and return 2', () => {
      // Act
      const result = calc.add(1, 1);
      // Assert
      expect(result).toBe(2);
    });
    it('should add 2 and 3 and return 5', () => {
      // Act
      const result = calc.add(2, 3);
      // Assert
      expect(result).toBe(5);
    });
    it('should add Number.MAX_SAFE_INTEGER + 1 and 37 and return 9007199254741028', () => {
      // Act
      const result = calc.add(Number.MAX_SAFE_INTEGER + 1, 37);
      // Assert
      expect(result).toBe(9007199254741028);
    });
  });
  describe('#multiply()', () => {
    it('should multiply 1 by 1 and return 1', () => {
      // Act
      const result = calc.multiply(1, 1);
      // Assert
      expect(result).toBe(1);
    });
    it('should multiply 1 by 0 and return 0', () => {
      // Act
      const result = calc.multiply(1, 0);
      // Assert
      expect(result).toBe(0);
    });
    it('should multiply 1 by -1 and return -1', () => {
      // Act
      const result = calc.multiply(1, -1);
      // Assert
      expect(result).toBe(-1);
    });
    it('should multiply 2 by 2 and return 4', () => {
      // Act
      const result = calc.multiply(2, 2);
      // Assert
      expect(result).toBe(4);
    });
  });
  describe('#divide()', () => {
    it('should not be able to divide by 0 using try catch', () => {
      try {
        calc.divide(1, 0);
        fail('You are not Chuck Norris!');
      } catch (e) {
        expect(e).toBe('You are not chuck norris');
      }
    });
    it('should not be able to divide by 0 much more elegant', () => {
      const thrower = () => calc.divide(1, 0);
      expect(thrower).toThrow();
    });
  });
  describe('#getRandomNumber()', () => {
    it('should return a random number', () => {
      const result = calc.getRandomNumber();
      expect(result).toEqual(jasmine.any(Number));
    });
  });
  it('should exist and be of type Object and Calculator', () => {
    expect(calc).toEqual(jasmine.any(Calculator));
    expect(calc).toEqual(jasmine.any(Object));
  });
});
