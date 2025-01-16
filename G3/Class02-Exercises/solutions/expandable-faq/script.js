const questions = document.querySelectorAll(".question");
console.log("all questions", questions);

for (let question of questions) {
  console.log("question", question);

  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    console.log(answer);

    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.classList.remove("expanded");
    } else {
      answer.style.display = "block";
      question.classList.add("expanded");
    }
  });
}
