const questions = [
    { question: "Who is our national hero?", answer: "Jose Rizal" },
    { question: "He is the youngest General of the Philippines", answer: "Gregorio" },
    { question: "Who is the Mother of Katipunan?", answer: "Melchora" }
];

let currentQuestion = 0;

function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestion].answer;
    const answerInput = document.getElementById('answer');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert("Congratulations! You completed the quiz.");
            currentQuestion = 0;
            displayQuestion();
        }
        answerInput.classList.remove('incorrect-answer');
        answerInput.classList.add('correct-answer');
    } else {
        alert("Incorrect answer. Try again.");
        currentQuestion = 0;
        displayQuestion();
        answerInput.classList.remove('correct-answer');
        answerInput.classList.add('incorrect-answer');
    }
    document.getElementById('answer').value = ''; // Clear input field
}

displayQuestion();
