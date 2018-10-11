function async(cb, value = '', timeout = 0) {
  setTimeout(() => {
    cb(value);
  }, timeout);
}
