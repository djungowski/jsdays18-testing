# Aufgabe 4 - Spies

## D) Async

Schreibe die Tests für `async` so um, dass sie `jasmine.clock()` verwenden.

### Implementierung (bei Bedarf)
```
function async(cb, value = '', timeout = 400) {
  setTimeout(() => {
    cb(value);
  }, timeout);
}
```

### Bisheriger Test (bei Bedarf)
```
it('should call async with a given param after 400ms', done => {
    const cb = jasmine.createSpy();
    async(cb, value, timeout);
    setTimeout(() => {
      expect(cb).toHaveBeenCalledWith(value);
      done();
    }, 400);
});
```
