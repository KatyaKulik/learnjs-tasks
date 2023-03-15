// Цикл

/*let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}
printList(list);
*/
// Рекурсия - более простой и читаемый вариант

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);
