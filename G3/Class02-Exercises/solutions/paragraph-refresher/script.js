console.log("tuka sum");

const paragraph = document.getElementById("text");
const toggleBtn = document.getElementById("toggleBtn");

// toggleBtn.addEventListener("click", function () {
//   paragraph.style.color = "red";
//   paragraph.style.fontSize = "40px";
// });

toggleBtn.addEventListener("click", function () {
  paragraph.classList.toggle("highlight");
});
