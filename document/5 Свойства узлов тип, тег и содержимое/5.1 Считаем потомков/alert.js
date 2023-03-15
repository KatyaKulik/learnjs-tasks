let list = document.querySelector("#car");
function getCar(list) {
  let items = list.child;
  for (let item of items) {
    alert(
      `${item.firstChild.data.trim()}: ${item.querySelectorAll("li").length}`
    );
    let innerList = item.querySelector("ul");
    if (innerList) getCar(innerList);
  }
}
getCar(list.child);
