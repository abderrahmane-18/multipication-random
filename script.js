const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const userAnswer = document.getElementById("userAnswer");
const feedback = document.getElementById("feedback");
const checkAnswerButton = document.getElementById("checkAnswer");
const newQuestionButton = document.getElementById("newQuestion");

let num1, num2;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  num1Element.textContent = num1;
  num2Element.textContent = num2;
  userAnswer.value = "";
  feedback.textContent = "";
}

function checkAnswer() {
  const answer = parseInt(userAnswer.value, 10);
  if (isNaN(answer)) {
    feedback.textContent = "يرجى إدخال رقم صالح.";
    feedback.style.color = "red";
    return;
  }
  if (answer === num1 * num2) {
    feedback.textContent = "إجابة صحيحة! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "إجابة خاطئة. حاول مرة أخرى.";
    feedback.style.color = "red";
  }
}

checkAnswerButton.addEventListener("click", checkAnswer);
newQuestionButton.addEventListener("click", generateQuestion);

// إنشاء أول سؤال عند تحميل الصفحة
generateQuestion();
