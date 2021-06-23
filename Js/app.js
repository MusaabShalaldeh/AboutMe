'use strict'
let userName; //Hello random Person on the internet, what is your name ?
let userScore = 0;


let question1; //is the person who made this page Musa'b ?
let question2; //is Musa'b's a Game Developer aswell ?
let question3; //Musa'b likes to listen to music while working, is that correct ?
let question4; //is Musa'b currently living in Amman, Jordan ?
let question5; //does Musa'b hate doing reads ?

let question6Answer;
let myFavNumber = 15;



let question7Answer;
let favMusic = ['electronic rock','chill vibe','fantasy instrumentals','classic pop'];
let answered7Correctly = false;



/*Musaab has done the function part already so I've just changed some functions name to be semantically understood*/


function beginButton()
{
    
    userName = prompt("Hello random Person on the internet, what is your name ?");

    while(!userName)
    {
        userName = prompt("Please enter your name!");
    }

    alert("Welcome "+userName+"!");
    alert("please answer the upcoming questions with yes/no or you will hurt yourscore!");

    //-----------------------
    question1 = prompt("is the person who made this page Musa'b ?");
    CheckAnswer(question1);
    console.log(question1);

    //-----------------------
    question2 = prompt("is Musa'b's a Game Developer aswell ?");
    CheckAnswer(question2);
    console.log(question2);

    //-----------------------
    question3 = prompt("Musa'b likes to listen to music while working, is that correct ?");
    CheckAnswer(question3);
    console.log(question3);

    //-----------------------
    question4 = prompt("is Musa'b currently living in Amman, Jordan ?");
    CheckAnswer(question4);
    console.log(question4);

    //-----------------------
    question5 = prompt("does Musa'b hate doing reads ?");
    CheckAnswer(question5);
    console.log(question5);
    

    //-----------------------
    
    question6Answer = prompt("how about a guessing number game ? sounds fun right?, try to guess my favorite number, I will help you a bit if you fail your 4 tries ;)","psst enter a number from 10 to 20")

    for(let i = 0; i < 3; i++)
    {
        if(question6Answer == myFavNumber)
        {
            break;
        }
        else if(question6Answer > 15)
        {
            alert("the number you entered is higher than my number, how about lowering it abit?");
        }
        else if(question6Answer < 15)
        {
            alert("the number you entered is less than my number, how about increasing it abit?");
        }

        alert("only "+(3 - i).toString()+" try(s) left.");
        question6Answer = prompt("please enter another number!");
    }

    if(question6Answer == myFavNumber)
    {
        alert("hooray, you got the correct number, lets move on to the next question!")
        userScore++;
    }
    else{
        alert("you failed every try you were given :( but worry not, you can try as many times as you want until you get the correct answer.")
    }
    
    while(question6Answer != myFavNumber)
    {
        question6Answer = prompt("please enter another number!, remember its betwen 10-20.");
        if(question6Answer == myFavNumber)
        {
            alert("hooray, you got the correct number, lets move on to the next question!")
            userScore++;
            break;
        }
        else if(question6Answer > 15)
        {
            alert("the number you entered is higher than my number, how about lowering it abit?");
        }
        else if(question6Answer < 15)
        {
            alert("the number you entered is less than my number, how about increasing it abit?");
        }
    }

    
    //-----------------------

    //question7Answer = prompt("name atleast 1 music genre that Musa'b likes, you got only 6 chances!, no fogiveness this time!")

    for(let i = 0; i < 6; i++)
    {
        // why arent we allowed to use .includes() :| ?
        // determine wether user answered correclty or not.
        question7Answer = prompt("name atleast 1 music genre that Musa'b likes, you got only 6 chances!, no fogiveness this time!")
        for(let _i = 0; _i < favMusic.length; _i++)
        {
            if(favMusic[_i] === question7Answer.toLocaleLowerCase())
            {
                answered7Correctly = true;
                break;
            }
            else{
                answered7Correctly = false
            }
        }

        if(answered7Correctly)
        {
            alert("aaaaay you now know which type of music i like!!");
            userScore++;
            break;
        }
        else{
            alert("only "+(5 - i).toString()+" try(s) left.");
        }
    }

    if(!answered7Correctly)
    {
        alert("you ran out of tries :(")
    }
        
    alert("here is a list of my favorite music "+ favMusic);

    alert("Calculating your result......");
    

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

    alert("you score is "+userScore+"/7");

    userScore = 0;
}

function CheckAnswer(value)
{
    switch(value.toLowerCase()){
        case 'yes':
            userScore++;
            break;
        case 'no':
            //nothing to be done here, just a wrong answer.
            break;
        default:
            alert('please answer with yes or no...decreasing your score..');
            userScore--;
            break;
    }
        
}


