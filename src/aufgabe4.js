function async(cb, value = '', timeout = 0) {
  setTimeout(() => {
    const t = Date.now();
    // while(true) {
    //   if (Date.now() - t > 5000) {
    //     break;
    //   }
    // }
    cb(value);
  }, timeout);
}
