function printNumbers(from, to) {
  let timerId = setInterval(function () {
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}
printNumbers(1, 5);
