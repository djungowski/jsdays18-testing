it('should add 1 and 1 and return 2', () => {
  // Arrange
  const calc = new Calculator();
  // Act
  const result = calc.add(1, 1);
  // Assert
  expect(result).toBe(2);
});
