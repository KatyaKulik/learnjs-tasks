// Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // 120
