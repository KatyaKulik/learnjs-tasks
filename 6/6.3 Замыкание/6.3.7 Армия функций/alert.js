makeArmy = () => {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = () => {
      return i;
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
};
let army = makeArmy;
console.log(army[5]);
// Не уверенна в решении этой задачи. Есть проблема с пониманием...:(
