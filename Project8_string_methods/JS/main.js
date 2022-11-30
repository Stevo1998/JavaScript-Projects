function Concatenate() { //Defying a function and giving it a name
    var Part1 = "This is "; //Defying a variable with a string
    var Part2 = " a sentence, "; //Defying a variable with a string
    var Part3 = "made of four "; //Defying a variable with a string
    var Part4 = "different parts."; //Defying a variable with a string
    var Sentence = Part1.concat(Part2,Part3,Part4); //Defying a variable and using the .concat() methon to concatenate the strings
    document.getElementById("concatenated").innerHTML = Sentence; //Using the getElementById to display the concatenated strings with id "concatenated" withing the HTML doc
}

function Sliced() { //Defying a function and giving it a name
    var sentence = "This is a sentence that will have a sliced part."; //Defying a variable with a string
    var part = sentence.slice(36 , 47); //Using the .slice() method to display only part of variable "sentence" with variable "part" 
    document.getElementById("slice").innerHTML = part; //Using the getElementById to display the sliced string assigned to variable "part"
}

function UpperCase() { //Defying a function and giving it a name
    var text = "This sentece is capitalized by the \"toUpperCase()\" method."; //Defying a variable with a string
    var AllCaps = text.toUpperCase(); //Using the .toUpperCase() method to display variable "text" in all caps and assinging it to variable "AllCaps"
    document.getElementById("uppercase").innerHTML = AllCaps; //Using the getElementById to display the all caps "text" variable using the "uppercase" id
}

function Number_String() { //Defying a function and giving it a name
    var X = 150; //Defying a variable with an expression
    document.getElementById("Numbers_to_Strings").innerHTML = X.toString(); //Using the getElementById to display the number assigned to variable "X" as a string
}

function Precision() { //Defying a function and giving it a name
    var x = 1234.4321 //Defying a variable with an expression
    var y = x.toPrecision(6); //Using the .toPercision method to turn the number assigned to Variable "x" as a six digit number and assigning it to variable "y"
    document.getElementById("Precision").innerHTML = y; //Using the getElementById to display variable "y" with id Precision
}

function ToFixed() { //Defying a function and giving it a name
    var A = 123.321; //Defying a variable with an expression
    document.getElementById("ToFixed").innerHTML = A.toFixed(10); //Using the getElementById to display varable "A" and using the .toFixed() method to display it as a 10 digit number
}

function ValueOf() { //Defying a function and giving it a name
    var B = "This is the end."; //Defying a variable with a string
    document.getElementById("ValueOf").innerHTML = B.valueOf() //Using the getElementById to display the content of variable "B" with the .valueOf() method
}
