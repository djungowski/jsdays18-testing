# Installation

```
  npm install
```

Step by step

```
npm init
npm install -D karma
npm install -D karma-jasmine karma-chrome-launcher jasmine-core
```

# Initialisierung

node_modules/.bin/karma init

# Ausführung

Server starten: node_modules/.bin/karma start

Test ausführen: node_modules/.bin/karma run

# schönere Ausgabe

`npm install -D karma-mocha-reporter`

in der karma.conf.js unter reporters: den Wert ['mocha'] eintragen.
