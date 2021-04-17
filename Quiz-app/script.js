const quizData = [
    {
        question: 'How much is? 5 + 5 * 3 - 2 + 5',
        a: 'a: 18',
        b: 'b: 20',
        c: 'c: 23',
        d: 'd: 33',
        correct: 'c' 
    },
    {
        question: 'How old is Queen Elizabeth?',
        a: 'a: 55',
        b: 'b: 94',
        c: 'c: 69',
        d: 'd: 91',
        correct: 'b' 
    },
    {
        question: 'What is the largest countrie in the world?',
        a: 'a: USA',
        b: 'b: China',
        c: 'c: Russia',
        d: 'd: Germany',
        correct: 'c' 
    },
    {
        question: 'How many continents are there?',
        a: 'a: 7',
        b: 'b: 5',
        c: 'c: 8',
        d: 'd: 4',
        correct: 'a' 
    },
    
];

const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
 
loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];
    deselectAnswers();
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d;
}
    function getSelected(){

        let answer = undefined;
        answerElements.forEach((answerElement) => {
            if(answerElement.checked){
                answer = answerElement.id;
            }
        });

        return answer;
    }

    function deselectAnswers(){
        answerElements.forEach((answerElement) => {
                answerElement.checked = false;
            });
        }
    

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> Your final result is:
             ${score}/${quizData.length} <h2>
             <button onclick="location.reload()">Play again?</button>`;
        }
    }
});
