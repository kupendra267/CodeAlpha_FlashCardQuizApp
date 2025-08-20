let flashcards = [
  { question: "What is JavaScript?", answer: "A programming language for the web." },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets." },
  { question: "What is HTML?", answer: "HyperText Markup Language." },
  { question: "What is Python?", answer: "A high-level programming language." },
  { question: "What is AI?", answer: "Simulation of human intelligence in machines." },
  { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { question: "What does SQL stand for?", answer: "Structured Query Language." }
];

let currentIndex = 0;
let showingAnswer = false;

function displayCard() {
  const flashcardDiv = document.getElementById("flashcard");
  const toggleBtn = document.getElementById("toggleBtn");

  if (flashcards.length === 0) {
    flashcardDiv.innerText = "No flashcards available. Please add one!";
    toggleBtn.style.display = "none";
    return;
  }

  toggleBtn.style.display = "inline-block";
  flashcardDiv.innerText = showingAnswer
    ? flashcards[currentIndex].answer
    : flashcards[currentIndex].question;

  toggleBtn.innerText = showingAnswer ? "Hide Answer" : "Show Answer";
}

function toggleAnswer() {
  showingAnswer = !showingAnswer;
  displayCard();
}

function nextCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingAnswer = false;
  displayCard();
  clearResult();
}

function prevCard() {
  if (flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingAnswer = false;
  displayCard();
  clearResult();
}

function addCard() {
  const q = document.getElementById("question").value;
  const a = document.getElementById("answer").value;
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    alert("Flashcard added!");
    displayCard();
  }
}

function editCard() {
  if (flashcards.length === 0) return;
  const q = document.getElementById("question").value;
  const a = document.getElementById("answer").value;
  if (q && a) {
    flashcards[currentIndex] = { question: q, answer: a };
    alert("Flashcard updated!");
    displayCard();
  }
}

function deleteCard() {
  if (flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  if (currentIndex >= flashcards.length) currentIndex = flashcards.length - 1;
  alert("Flashcard deleted!");
  displayCard();
}

function submitAnswer() {
  if (flashcards.length === 0) return;
  const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
  const correctAnswer = flashcards[currentIndex].answer.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    resultDiv.innerHTML = "<span class='correct'>✅ Correct!</span>";
  } else {
    resultDiv.innerHTML = "<span class='wrong'>❌ Wrong! Try again.</span>";
  }
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("userAnswer").value = "";
}

displayCard();
