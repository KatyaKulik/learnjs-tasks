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

// Смогла только с циклом решить:(

function printList(list) {
  let tmp = list;
  let newList = { value: tmp.value, next: null };
  tmp = tmp.next;
  while (tmp) {
    newList = { value: tmp.value, next: newList };
    tmp = tmp.next;
  }
  while (newList) {
    console.log(newList.value);
    newList = newList.next;
  }
}
printList(list);
