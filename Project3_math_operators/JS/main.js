function MathAddition() { //Defining a function and naming it
    var Addition = 2 + 2; //Defining a variable and giving it an expression using addition math
    document.getElementById("Add").innerHTML = "2 + 2 = " + Addition; //Putting the value of the variable into the HTML element FromPoint with the "Add" id
}

function MathSubtraction() { //Defining a function and naming it
    var Subtraction = 4 - 2; //Defining a variable and giving it an expression using subtraction math
    document.getElementById("Subtract").innerHTML = "4 - 2 = " + Subtraction; //Putting the value of the variable into the HTML element FromPoint with the "Subtract" id 
}

function MathMultiplication() { //Defining a function and naming it
    var Multiplication = 6 * 8; //Defining a variable and giving it an expression using multiplication math
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + Multiplication; //Putting the value of the variable into the HTML element FromPoint with the "Multiply" id
}

function MathDivision() { //Defining a function and naming it
    var Division = 48 / 6; //Defining a variable and giving it an expression using division math
    document.getElementById("Divide").innerHTML = "48 / 6 = " + Division; //Putting the value of the variable into the HTML element FromPoint with the "Divide" id
}

function MathMulti() { //Defining a function and naming it
    var SimpleMath = (1 + 2) * 10 / 2 - 5; //Defining a variable and giving it an expression using multiple math operations
    document.getElementById("Multiple").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + SimpleMath; //Putting the value of the variable into the HTML element FromPoint with the "Multiple" id
}

function ModulusOperator() { //Defining a function and naming it
    var Modulus = 25 % 6;  //Defining a variable and giving it an expression using a modulus operator
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Modulus; //Putting the value of the variable into the HTML element FromPoint with the "remainder" id and be displayed along with a string
}

function Negation_Operator() { //Defining a function and naming it
    var A = 10; //Defining a variable and giving it an expression using a unary operator
    document.getElementById("Negation").innerHTML = -A; //Putting the value of the variable into the HTML element FromPoint with the "Negation" id
}

var B = 5; //Defining a variable and giving it an expression 
B++; //Using the increment operator on the variable
document.write(B); //Using document.write to display the value of the variable

var C = 5.25; //Defining a variable and giving it an expression 
C--; //Using the decrement operator on the variable
document.write(C); //Using document.write to display the value of the variable

window.alert(Math.random() *100) //Using the window.alert to display a random number 

function PI() { //Defining a function and naming it
    var PI = Math.PI //Defining a variable and giving it an expression using a math object
    document.getElementById("PI").innerHTML = PI; //Putting the value of the variable into the HTML element FromPoint with the "PI" id
}