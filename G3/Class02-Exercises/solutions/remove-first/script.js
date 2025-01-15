const list = document.getElementById("removableList");
const removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
  console.log(list.firstElementChild);
  if (list.firstElementChild) {
    list.firstElementChild.remove();
    console.log(list.firstElementChild, "does it exist");
  }
});
