function delay(func, ms) {
  function deep() {
    return setTimeout(func.bind(this, ...arguments), ms);
  }
  return deep;
}
