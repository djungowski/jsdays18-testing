# Aufgabe 4 - Spies

## A) Async

Schreibe eine Funktion async(), die
eine Funktion nach 400ms mit einem
bestimmten Wert aufruft.

Teste, ob die Callbackfunktion mit
dem übergebenen Wert aufgerufen wird

`jasmine.createSpy()` - erzeugt eine leere Spy-Funktion

### Signatur

async(
callback,
callbackParam = 'Hallo Welt',
timeout = 400
