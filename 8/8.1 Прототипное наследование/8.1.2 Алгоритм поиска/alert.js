let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head, // добавили __proto__
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table, // добавили
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
// Выводим

console.log(pockets.pen); //3
console.log(bed.glasses); //1
console.log(table.money); //undefined

// Разницы в скорости нет, одинаково
