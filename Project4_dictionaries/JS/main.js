function My_Dictionary() { // defined a function and gave it a name
    var Pet = { //defined a variable "Pet" and gave it a dictionary value
        Name: "Honey  ", //defined a key and its value 
        Species: "Dog ", //defined a key and its value 
        Color: "Brown ", //defined a key and its value 
        Breed: "Chihuahua ", // defined a key and its value 
        Age: 9, //defined a key and its value 
        Sound: "Bark! " // efined a key and its value 
    }; 
    document.getElementById("Dictionary").innerHTML = Pet.Name + "is a " + Pet.Color + Pet.Breed; //Put the value of the several keys and values to be displayed by the "Dictionary" id
}

function Other_Dictionary() { //defined a function and gave it a name
    var Pet = { //defined a variable "Pet" and gave it a dictionary value
        Name: "Honey  ", //defined a key and its value 
        Species: "Dog ", //defined a key and its value 
        Color: "Brown ", //defined a key and its value 
        Breed: "Chihuahua ", //defined a key and its value 
        Age: 9, //defined a key and its value 
        Sound: "Bark! " //defined a key and its value 
    };
    delete Pet.Species; //deleted the key "Species" and its value from the Pet dictionary 
    document.getElementById("Deleted").innerHTML = Pet.Name + "is a " + Pet.Species + " who likes to " + Pet.Sound; //Put the value of the several keys and values to be displayed by the "Deleted" id where there is an undefined key.
}