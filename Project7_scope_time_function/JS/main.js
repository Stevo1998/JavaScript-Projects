A = 15 //Defying a variable
function Addition() { // Deffying a functtion and giving it a name
    var B =  25 //Defying a variable
    document.write(B + A + "<br>"); //Using the document.write method to display the result of the function
}
console.log(B = 25) //Using the console.log method to debug the undefined B variable 
function Add() { //Defying a function and giving it a name
    document.write(B + 50); //Using the document.write method to display the result of the function 
}
Addition(); //Calling the Addition function
Add(); //Calling the Add Function

function get_Date() { //Defying a function and givint it a name
    if (new Date().getHours() < 18) { // setting a coditional statement
    document.getElementById("Greeting").innerHTML = "How are you today?" //displaying the result according to the conditional statement
    }
}

function Timed_Greeting() { //Defying a function and giving it a name
    var time = new Date().getHours(); //Making the curent time as an object to be the value of the time variable   
    if (time < 12) { //Setting an if conditional statement
        document.getElementById("TimedGreeting").innerHTML = "Good morning!";  //Setting the result of the if conditional statement
    } else if (time < 18) { // Setting an else if conditional statement
        document.getElementById("TimedGreeting").innerHTML = "Good afternoon!"; //Setting the result of else if conditional statement
    } else { // =Setting an else conditional statement
        document.getElementById("TimedGreeting").innerHTML = "Good evening!"; //Setting the result of the else conditional statement 
    }
}

function AgeFunction() { //Defying a function and giving it a name
    Age = document.getElementById("Age").value; //Seting Age to be equal to the inputted value by the user on the website
    if (Age >= 35) { //Setting an if conditional statement
        Apply = "As long as you were bron in the U.S, You can apply to be presindent."; //Setting the result of the if statement to be displayed if the conditions are met
    }
    else { //Setting an else conditional statement
        Apply = "You cannot apply to be president of the U.S, sorry." //Setting the result of the if statement to be displayed if the if conditions are not met
    }
    document.getElementById("Old").innerHTML = Apply; // Using the getElementById method to display either one of the condition results depending on which condition was met
}