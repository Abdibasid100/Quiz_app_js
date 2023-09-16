let questions = [
  {
    question: "Which is the largest countrey in the world?",
    answers: [
      { Text: "Algera", correct: false },
      { Text: "USA", correct: false },
      { Text: "Russia", correct: true },
      { Text: "Brazil", correct: false },
    ],
  },
  {
    question: "Which is the capital city of somalia?",
    answers: [
      { Text: "Mogadisho", correct: true },
      { Text: "Bosaaso", correct: false },
      { Text: "Kismaayo", correct: false },
      { Text: "Hargeisa", correct: false },
    ],
  },
  {
    question: "Which is the greatest player of all time in Soccer/football?",
    answers: [
      { Text: "Pele", correct: false },
      { Text: "Maradona", correct: false },
      { Text: "Ronaldo", correct: false },
      { Text: "Messi", correct: true },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { Text: "Shark", correct: false },
      { Text: "Blue whale", correct: true },
      { Text: "Elephant", correct: false },
      { Text: "Girrafe", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { Text: "Kalahari", correct: false },
      { Text: "Aractic", correct: false },
      { Text: "Australia", correct: false },
      { Text: "Antractica", correct: true },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerbtn = document.querySelector(".answer-btn");
const nxtbtn = document.querySelector(".nxt-btn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  nxtbtn.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQustion = questions[currentQuestionIndex];
  let QuestionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = QuestionNo + ". " + currentQustion.question;

  currentQustion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.className = "btn";
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nxtbtn.style.display = "none";
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectbtn = e.target;
  const isCorrect = selectbtn.dataset.correct === "true";
  if (isCorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nxtbtn.style.display = "block";
}

nxtbtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handlebutton();
  } else {
    startQuiz();
  }
});

function handlebutton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
  nxtbtn.innerHTML = "Play again";
  nxtbtn.style.display = "block";
}

startQuiz();
