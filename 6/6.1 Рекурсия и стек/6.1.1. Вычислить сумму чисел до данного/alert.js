// Решение с циклом

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(1000));

// Рекурсия   sumTo(n) = n + sumTo(n-1) for n > 1

function sumTo(n) {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
}
console.log(sumTo(1000));

// sumTo(n) = n*(n+1)/2

function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo(1000));
