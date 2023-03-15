/*let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/

function debounce(func, ms) {
  let lastDate = 0;
  return function () {
    if (Date.now() - lastDate > ms) {
      func.apply(this, arguments);
      lastDate - Date.now();
    }
  };
}
