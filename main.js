const questions = [
    { 
        question: "Что такое HTML?",
        answers: ["Язык программирования", "Разметка", "База данных"],
        correctAnswer: 1
    },
    { 
        question: "Что такое CSS?",
        answers: ["Стили", "Скрипты", "Функции"],
        correctAnswer: 0
    },
    {
        question: "Что такое JavaScript?",
        answers: ["Язык разметки", "Язык программирования", "Фреймворк"],
        correctAnswer: 1
    },
    {
        question: "Что делает тег <div>?",
        answers: ["Прикрепляет к сайту музыку", "Определяет логическое разделение веб-cтраницы", "Стили для страницы"],
        correctAnswer: 1
    },

    {
        question: "Какой тег используется для вставки изображения?",
        answers: ["<img>", "<image>", "<pic>"],
        correctAnswer: 0
    },
    
    {
        question: "Какой атрибут используется для указания ссылок?",
        answers: ["href", "link", "src"],
        correctAnswer: 0
    },
    {
        question: "Как создать переменную,которую можно изменить впоследствии?",
        answers: ["let", "const", "src"],
        correctAnswer: 0
    },
    {
        question: "Как в css обратиться к элементу через id?",
        answers: ["#", ".", "Ничего"],
        correctAnswer: 0
    },
    {
        question: "Как сделать самый большой заголовок?",
        answers: ["h1", "link", "src"],
        correctAnswer: 0
    },
    {
        question: "Как сделать массив?",
        answers: ["[]", "{}", "**"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let scr = 0
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score")
const resultElement = document.getElementById("result");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    answersElement.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => checkAnswer(index));
        answersElement.appendChild(answerButton);
    });
}

function checkAnswer(answerIndex) {
    const questionData = questions[currentQuestion];
    if (answerIndex === questionData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
    
}

function showResult() {
    scr = (score==0 || score==1) ? 2 : (score>=2 && score<5) ? 3 : (score>=5 && score<8) ? 4 : 5
    questionElement.textContent = "";
    answersElement.innerHTML = "";
    resultElement.textContent = `Результат: ${score} из ${questions.length}`;
    scoreElement.textContent=`Ваша оценка: ${scr}`
}

loadQuestion();