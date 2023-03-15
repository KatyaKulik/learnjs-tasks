let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(arr) {
  return (x, y) => (x[arr] > y[arr] ? 1 : -1);
}
users.sort(byField("name"));
users.forEach((users) => console.log(users.name)); // Ann //  John //Pete

users.sort(byField("age"));
users.forEach((users) => console.log(users.age)); // 18  // 19  //20
