var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

// Função para guardar a resposta de cada pergunta do questionário
function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

// Função para calcular a pontuação final do usuário no questionário
function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5;
    
    return total_score;
}

// Função para fazer um comentário sobre a pontuação do usuário
function getInfoBasedOnScore(){
    if( (totalScore() >= 0) && (totalScore() <= 6) )
    {
        var score_info = "Você está extremamente desprotegido de ataques cibernéticos!!!";
    } 
    else if( (totalScore() > 6) && (totalScore() <= 11) )
    {
        var score_info = "Você precisa tomar mais cuidado com a sua segurança na web!"
    }
    else if( (totalScore() > 11) && (totalScore() <= 16) )
    {
        var score_info = "Muito bem! É pouco provável que você caia em algum esquema de roubo de informações."
    }
    else if(totalScore() > 16) 
    {
        var score_info = "Parabéns! Você está preparado para qualquer coisa que tentarem fazer contra você no meio digital!"
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

// Função para ir para o próximo passo do questionário 
function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

growProgressBar('0%');

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('20%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('40%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('60%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('80%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('100%');
})

submit5.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

// Função que controla o avanço da barra de progressão
function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}