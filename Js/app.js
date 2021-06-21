'use strict'
let userName;
let userScore = 0;


let question1;
let question2;
let question3;
let question4;
let question5;
let question6;


function startAskingQuestions()
{
    userName = prompt("Hello random Person on the internet, what is your name ?");

    alert("Welcome "+userName+"!");

    question1 = confirm("is the person who made this page Musa'b ?");
    if(question1)
        userScore++;

    question2 = confirm("is Musa'b's a Game Developer aswell ?");
    if(question2)
        userScore++;

    question3 = confirm("is Musa'b a Graphic Designer ?");
    if(!question3)
        userScore++;

    question4 = confirm("Musa'b likes to listen to music while working, is that correct ?");
    if(question4)
        userScore++;

    question5 = confirm("is Musa'b currently living in Amman, Jordan ?");
    if(question5)
        userScore++;

    question6 = confirm("does Musa'b hate doing reads?");
    if(question6)
        userScore++;


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
    else
    {
        alert("were you trying to put wrong answers on purpose, "+userName+" ?, please read again!");
    }
}