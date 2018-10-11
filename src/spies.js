function runcallback(cb, value) {
  cb(value);
  cb('was anderes');
}

function logSomething(value) {
  console.log(value);
}
