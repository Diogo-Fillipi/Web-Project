const questions = [
    {
        question: "I didn't ______ TV last night. ",
        options: ["See", "Watch", "Watched"],
        answer: "b"
    },
    {
        question: "______ brothers and sisters do you have? ",
        options: ["How", "How many", "How much"],
        answer: "b"
    },
    {
        question: "When I last saw him he ______ to an old lady.",
        options: ["Was talked", "Was talking", "Will be talking"],
        answer: "b"
    },
    {
        question: "______ a restaurant near here? ",
        options: ["Is there", "There is", "Have"],
        answer: "a"
    },
    {
        question: "George is ______. ",
        options: ["A engineer", "An engineer", "Engineer"],
        answer: "b"
    },
    {
        question: "I've lost my keys. I can't find them ______.",
        options: ["Somewhere", "Nowhere", "Anywhere"],
        answer: "c"
    },
    {
        question: "Bob ______ play soccer when he was young.",
        options: ["Is used to", "Used", "Used to"],
        answer: "c"
    },
    {
        question: "Where did the Hoffmans ______ their kids last weekend?",
        options: ["Taken", "Took", "Take"],
        answer: "c"
    },
    {
        question: "Complete a frase: Nora is ____ in a job with no opportunities for advancement",
        options: ["concerned about work", "used to work", "tired of working"],
        answer: "c"
    },
    {
        question: "Complete a frase: “Sorry, there are no tables available.” “I guess we _____ a reservation!”",
        options: ["should have made", "should make.", "make."],
        answer: "a"
    }];
        

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
let currentQuestionIndex = 0;
let answers = [];

function displayQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach((option, i) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = String.fromCharCode(97 + i); // Convertendo para letras: a, b, c, ...
        input.id = `option${i}`;
        input.addEventListener('change', () => {
            answers[index] = input.value;
        });

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = `${input.value}) ${option}`;

        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container'); // Adiciona uma classe para estilização
        optionContainer.appendChild(input);
        optionContainer.appendChild(label);
        optionsElement.appendChild(optionContainer);
    });

    if (answers[index]) {
        // Marcar a opção selecionada, se existir uma resposta anterior
        const selectedInput = document.getElementById(`option${answers[index].charCodeAt(0) - 97}`);
        if (selectedInput) {
            selectedInput.checked = true;
        }
    }
}

function updateButtons() {
    prevButton.style.display = currentQuestionIndex > 0 ? 'inline' : 'none';
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? 'inline' : 'none';
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'inline' : 'none';
}

function showScore() {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    resultText.textContent = `Você marcou ${score} de ${questions.length} pontos.`;

    // Ocultar o contêiner de perguntas
    questionContainer.style.display = 'none';

    prevButton.style.display = 'none'
    nextButton.style.display = 'none'
    submitButton.style.display = 'none'

    // Exibir o contêiner de resultado
    resultContainer.style.display = '';
}


displayQuestion(currentQuestionIndex);
updateButtons();

nextButton.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
        updateButtons();
    } else {
        alert("Você chegou ao final do questionário.");
    }
});

prevButton.addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        updateButtons();
    }
});

submitButton.addEventListener('click', function() {
    showScore();
});