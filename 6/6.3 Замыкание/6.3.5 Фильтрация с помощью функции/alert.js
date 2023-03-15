function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b;
  };
}
function inArray(array) {
  return function (item) {
    return array.includes(item);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
