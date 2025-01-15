console.log("tuka sum");

const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");

changeColorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = colorInput.value;
});
