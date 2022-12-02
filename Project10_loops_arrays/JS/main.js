function Call_Loop() { // Defying a funtion and giving it a name
    var Digit = ""; //Defying variable "Digit" with a blank string value
    var X = 5; //Defying  variable X with an expression
    while (X > -1){ //Setting a  while loop
        Digit += "<br>" + X; //Changing the value of Digit variable during loop
        X--; //Changing the value of X during loop
    }
    document.getElementById("Loop").innerHTML = Digit; //Displaying the loop result in html using id "loop"
}

function Length() { //Defying a funnction and giving it a name
    var text = "How many characters are in this sentence?"; //Defying var "text" with a string sentence
    var length = text.length; //Defying var "length" to the character length of var "text" using the .length property
    document.getElementById("Characters").innerHTML = length + " (Spaces are characters too..)" //Displaying  the valuer of var "length" + a string in html using id "Characters"
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"] //Defying a variable and its parameters
var Content = ""; //Defying variable "Content" with an empty string
var Y;  //Defying variable Y
function for_Loop() { //Defying a function and giving it a name
    for (Y = 0; Y < Instruments.length; Y++) { //Setting a for loop and its conditions
        Content += Instruments[Y] + "<br>"; //Changing the value of "Content" during loop
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //Displaying the result of the loop with id "List_of_instruments"
}

function array_Function() { //Defying a function and giving it a name
    var dog_picture = []; //Defying a variable with object "dog_picture" followed by a list of arrays
    dog_picture[0] = "begging"; //Defying the value for the object "dog_picture" at index 0
    dog_picture[1] = "eating"; //Defying the value for the object "dog_picture" at index 1
    dog_picture[2] = "playing"; //Defying the value for the object "dog_picture" at index 2
    dog_picture[3] = "sleeping"; //Defying the value for the object "dog_picture" at index 3
    document.getElementById("Array").innerHTML = "In this picture, my dog is " +  dog_picture[0] + " for food."; //Displaying the result of the array_function with id "Array"
}

const athlete = {sport: "soccer", type: "striker", number: "9"}; //Defying an const object along with properties and their values
function constant_function() { //Defying a function and giving it a name
    athlete.type = "mid-fielder"; //Changing the value of the "type" property
    athlete.time = "high school" //Adding a property and its value
    document.getElementById("Constant").innerHTML = "I used to be a " + athlete.time + " " + athlete.sport + "  athlete who played as a " + athlete.type + " and wore the number " + athlete.number; //Displaying the result of the array_function with id "Constant"
}

function Let_Function () {
    var A = 2; //Defying a global scope variable
    document.getElementById("A").innerHTML = (A); //Displaying global variable
    {
        let A = "02"; //Defying a fuction scope varibale
        document.getElementById("B").innerHTML = (A); //Displaying function variable
    }
    document.getElementById("C").innerHTML = (A); //Displaying global variable
}
let Z = Return_Function(5, 5) //Defying a variable with a function and its parameters as the value
function OnClickFunction() { //Defying a function and giving it a name
    document.getElementById("Return").innerHTML = Z; //Displaying variable "Z"
}
function Return_Function(a, b) { //Defying a function and giving it a name as well as parameters to work with
    return a * b; //Defying the function result
}

let car = { //Using let to crate an object
    make: "Infiniti ", //Defying the make property and its value
    model: "G37s ", //Defying the model property and its value
    year: "2012 ", //Defying the year property and its value
    color: "granite ", //Defying the color property and its value
    description: function() { //Defying the object "description" as a function
        return "I drive a "  + car.color + car.year + car.make + car.model; //Returning a string concatenated to a series of objects and properties
    }
};
document.getElementById("Car").innerHTML = car.description(); //Displaying the result of the function assigned above as the value of the description property under the car object