class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw 'You are not chuck norris';
    }
  }
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
