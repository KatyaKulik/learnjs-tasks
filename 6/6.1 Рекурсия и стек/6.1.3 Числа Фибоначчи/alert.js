// Fn = Fn-1 + Fn-2

let fib = (n) => {
  let fibArr = [0];
  let fib = 0;

  for (let i = 1; i < n; i++) {
    if (fib < 2) {
      fibArr.push(1);
      fib = +fibArr.slice(-1).join() + +fibArr.slice(-2, -1).join();
    } else {
      fibArr.push(fib);
      fib = +fibArr.slice(-1).join() + +fibArr.slice(-2, -1).join();
    }
  }
  return fib;
};

console.log(fib(77));
