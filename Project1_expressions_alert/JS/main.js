var A = "Hello, World!" //Created a variable containing a string
window.alert(A); //Created a window alert displaying variable A

var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string" //Created two variables
document.write(Sent1 + Sent2); //Used the document.write to display variable A and B concatenated

function Expression_Function() { //Defining a function and naming it
    var B = 3+3 ; //Defining a variable and giving it an expression
    document.getElementById("Button_Text").innerHTML = B; //Putting the value of the variable into the HTML element FromPoint with the "Button_Text" id
}