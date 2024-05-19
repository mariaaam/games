import Question from "./question.js";
import Quiz from "./quiz.js";



//^ >===========> HTML ELements
export const quizOptionsForm = document.getElementById("quizOptions");
export const categoryInput = document.getElementById("categoryMenu");
export const difficultyOptions = document.getElementById("difficultyOptions");
export const questionsNumber = document.getElementById("questionsNumber");
export const startQuizBtn = document.getElementById("startQuiz");
export const questionsContainer = document.querySelector(
  ".questions-container"
);

// console.log(difficultyOptions)

//& >===========> App variables
export let questions = [];
export let currentQuiz = {};


//* >===========> Events
startQuizBtn.addEventListener("click", async function () {
  const category = categoryInput.value;
  const difficulty = difficultyOptions.value;
  const numberOfQuestions = questionsNumber.value;

  currentQuiz = new Quiz(category, difficulty, numberOfQuestions);

  questions = await currentQuiz.getQuestions();

  quizOptionsForm.classList.replace("d-flex", "d-none");

  const firstQuestion = new Question(0);
  firstQuestion.displayQuestion();
});
