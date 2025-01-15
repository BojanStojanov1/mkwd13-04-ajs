console.log("tuka sum");

const list = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
});
