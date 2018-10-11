describe('Calculator', () => {
  describe('#add()', () => {
    it('should add 1 and 1 and return 2', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.add(1, 1);
      // Assert
      expect(result).toBe(2);
    });
    it('should add 2 and 3 and return 5', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.add(2, 3);
      // Assert
      expect(result).toBe(5);
    });
    it('should add Number.MAX_SAFE_INTEGER + 1 and 37 and return 9007199254741028', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.add(Number.MAX_SAFE_INTEGER + 1, 37);
      // Assert
      expect(result).toBe(9007199254741028);
    });
  });
  describe('#multiply()', () => {
    it('should multiply 1 by 1 and return 1', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.multiply(1, 1);
      // Assert
      expect(result).toBe(1);
    });
    it('should multiply 1 by 0 and return 0', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.multiply(1, 0);
      // Assert
      expect(result).toBe(0);
    });
    it('should multiply 1 by -1 and return -1', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.multiply(1, -1);
      // Assert
      expect(result).toBe(-1);
    });
    it('should multiply 2 by 2 and return 4', () => {
      // Arrange
      const calc = new Calculator();
      // Act
      const result = calc.multiply(2, 2);
      // Assert
      expect(result).toBe(4);
    });
  });
});
