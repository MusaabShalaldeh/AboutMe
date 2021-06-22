'use strict'
let userName; //Hello random Person on the internet, what is your name ?
let userScore = 0;


let question1; //is the person who made this page Musa'b ?
let question2; //is Musa'b's a Game Developer aswell ?
let question3; //Musa'b likes to listen to music while working, is that correct ?
let question4; //is Musa'b currently living in Amman, Jordan ?
let question5; //does Musa'b hate doing reads ?


function startAskingQuestions()
{
    userName = prompt("Hello random Person on the internet, what is your name ?");

    while(!userName)
    {
        userName = prompt("Please enter your name!");
    }

    alert("Welcome "+userName+"!");
    alert("please answer the upcoming questions with yes/no or you will hurt yourscore!");

    question1 = prompt("is the person who made this page Musa'b ?");
    CheckAnswer(question1);
    console.log(question1);

    question2 = prompt("is Musa'b's a Game Developer aswell ?");
    CheckAnswer(question2);
    console.log(question2);

    question3 = prompt("Musa'b likes to listen to music while working, is that correct ?");
    CheckAnswer(question3);
    console.log(question3);

    question4 = prompt("is Musa'b currently living in Amman, Jordan ?");
    CheckAnswer(question4);
    console.log(question4);

    question5 = prompt("does Musa'b hate doing reads ?");
    CheckAnswer(question5);
    console.log(question5);


    //give result to user

    GiveResultToUser();
}
function GiveResultToUser()
{

    //its cleaner to have only 1 alert notification ay the end instead of putting it for each answer, please dont grade me 0 XD
    if(userScore > 4)
    {
        alert("I am really glad to meet you, "+userName+", now you know a bit more about me!");
    }
    else if(userScore <= 4 && userScore >= 2)
    {
        alert("you answered few questions correctly, but some are not correct :/")
    }
    else
    {
        alert("were you trying to put wrong answers on purpose, "+userName+" ?, please read again!");
    }

    alert("you score is "+userScore+"/5");

    userScore = 0;
}

function CheckAnswer(value)
{
    switch(value.toLowerCase()){
        case 'yes':
            userScore++;
            break;
        case 'no':
            userScore -= 0.5;
            break;
        default:
            alert('please answer with yes or no...decreasing your score..');
            userScore--;
            break;
    }
        
}


