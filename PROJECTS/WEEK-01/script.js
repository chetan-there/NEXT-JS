
// Quiz questions array
const questions = [
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "const", "var", "static"],
    answer: "const"
  },
  {
    question: "Which HTML tag is used to include JavaScript code?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Display Object Mode", "Desktop Oriented Module"],
    answer: "Document Object Model"
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22"
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "===", "=", "!="],
    answer: "==="
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "pop()"
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseover", "onkeypress"],
    answer: "onclick"
  },
  {
    question: "Which function converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS()"],
    answer: "JSON.parse()"
  },
  {
    question: "What is the correct syntax to write a JavaScript arrow function?",
    options: ["function myFunc() => {}", "myFunc() => {}", "const myFunc = () => {}", "const myFunc = function() => {}"],
    answer: "const myFunc = () => {}"
  },
  {
    question: "Which property is used to change the text color of an HTML element in JavaScript?",
    options: ["element.color", "element.textColor", "element.style.color", "element.style.textColor"],
    answer: "element.style.color"
  },
  {
    question: "Which loop is best when you want to iterate over the properties of an object?",
    options: ["for", "for…in", "for…of", "while"],
    answer: "for…in"
  },
  {
    question: "Which loop is best when you want to iterate over elements of an array?",
    options: ["for", "for…in", "for…of", "while"],
    answer: "for…of"
  },
  {
    question: "What will `typeof NaN` return in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number"
  },
  {
    question: "Which HTML attribute is used to link an external JavaScript file?",
    options: ["src", "href", "link", "script"],
    answer: "src"
  }
];

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreScreen = document.getElementById("score-screen");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restartBtn");
const timerEl = document.getElementById("time");
const progressBar = document.getElementById("progress-bar");

// Quiz state
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

// Load the current question
function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerEl.textContent = timeLeft;

  startTimer();

  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className =
      "option-btn w-full bg-gray-700 hover:bg-gray-600 py-2 rounded";
    btn.addEventListener("click", () => selectAnswer(option, btn));
    optionsEl.appendChild(btn);
  });

  nextBtn.classList.add("hidden");
  updateProgressBar();
}

// Handle answer selection
function selectAnswer(selected, button) {
  const correctAnswer = questions[currentQuestion].answer;

  // Disable all buttons
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(btn => (btn.disabled = true));

  // Check if correct
  if (selected === correctAnswer) {
    button.classList.add("bg-green-600");
    score++;
  } else {
    button.classList.add("bg-red-600");
  }

  nextBtn.classList.remove("hidden");
  clearInterval(timer);
}

// Go to next question
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Display score
function showScore() {
  document.querySelector("h1").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  questionEl.classList.add("hidden");
  optionsEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  progressBar.parentElement.classList.add("hidden");

  scoreScreen.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Restart quiz
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  scoreScreen.classList.add("hidden");
  document.querySelector("h1").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  questionEl.classList.remove("hidden");
  optionsEl.classList.remove("hidden");
  progressBar.parentElement.classList.remove("hidden");
  loadQuestion();
});

// Timer function
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextBtn.classList.remove("hidden");
      const correctAnswer = questions[currentQuestion].answer;

      // Highlight correct answer automatically
      const allButtons = optionsEl.querySelectorAll("button");
      allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
          btn.classList.add("bg-green-600");
        }
      });
    }
  }, 1000);
}

// Progress bar
function updateProgressBar() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Start quiz initially
loadQuestion();
