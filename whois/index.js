const quizData = [
    {
        question: "What do you use to mend a jack-o-lantern?",
        answer: "pumpkin patch"
    },
    {
        question: "Who won the skeleton race?",
        answer: "no body"
    },
    {
        question: "What do you get when you drop a pumpkin?",
        answer: "squash"
    },
    {
        question: "What falls but never breaks?",
        answer: "nightfall"
    },
    {
        question: "What asks but never answers?",
        answer: "owl"
    },
    {
        question: "What is a tree's least favorite month?",
        answer: "septimber"
    },
    {
        question: "What is a scarecrow's favorite fruit?",
        answer: "strawberry"
    },
    {
        question: "Who helps the small pumpkins cross the street at school?",
        answer: "crossing gourd"
    },
    {
        question: "What has ears but can't hear a thing?",
        answer: "cornfield"
    },
    {
        question: "Which side of a tree has the most leaves?",
        answer: "outside"
    },
];

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitButton = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle quizData
shuffleArray(quizData);

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    answerInput.value = ''; // Clear previous answer
    answerInput.focus(); // Focus on input field
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase(); // Convert user input to lower case
    const correctAnswer = quizData[currentQuestion].answer.toLowerCase(); // Convert correct answer to lower case

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = quizData.length;
    const resultMessage = score === totalQuestions ? "Good job!" : "Try again";

    // Create a container div
    const container = document.createElement('div');
    container.className = 'text';

    // Create and set up the heading
    const heading = document.createElement('h1');
    heading.textContent = 'Quiz Completed!';

    // Create and set up the score paragraph
    const scoreParagraph = document.createElement('p');
    scoreParagraph.textContent = `Your score: ${score}/${totalQuestions}`;

    // Create and set up the button
    const button = document.createElement('button');
    button.textContent = resultMessage;

    // Add event listener based on the resultMessage
    if (resultMessage === "Good job!") {
        button.addEventListener('click', () => {
            window.location.href = "sike.html"; // Replace with the actual URL
        });
    } else {
        button.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // Append elements to the container
    container.appendChild(heading);
    container.appendChild(scoreParagraph);
    container.appendChild(button);

    // Replace quiz content with the new content
    quiz.innerHTML = ''; // Clear existing content
    quiz.appendChild(container);
}


// Event listener for the submit button
submitButton.addEventListener("click", checkAnswer);

// Event listener for the Enter key press
answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is "Enter"
        event.preventDefault(); // Prevent the default action (like form submission)
        checkAnswer(); // Call the function to check the answer
    }
});

// Initial call to display the first question
showQuestion();
