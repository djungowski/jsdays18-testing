function returnSomeOtherFunction(value) {
  return () => {
    console.log(value);
  };
}
