function Ride_Function() { //Defying a function and giving it a name
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Phone(Make, Model, Color) { //Defying a function, giving it a name and parameters
    this.Phone_Make = Make; //Using the this keyword to refer the Make parameter in the function as an object
    this.Phone_Model = Model; // Using the this keyword to refer the Model parameter as an object
    this.Phone_Color = Color; // using the this keyword to refer to the Year parameter as an object
}
var Robert = new Phone("Samsung ", "Galaxy-Flip ", "black "); //Defying a variable in which the new keyword is used to create an specific Phone function for Robert
var Silvia = new Phone("Samnsung ", "Galaxy S10 ", "chrome "); //Defying a variable in which the new keyword is used to create an specific Phone function for Silvia
var Steven = new Phone("Iphone ", "XR ", "red "); //Defying a variable in which the new keyword is used to create an specific Phone function for Steven 
function myFunction() { //Defying a function and giving it a name 
    document.getElementById("New_and_This").innerHTML = "Steven phone is a " + Steven.Phone_Color + Steven.Phone_Make + Steven.Phone_Model; // Setting the value of the "New_and_This" id to a string plus the objects created specifically for Steven
}

function Name_Function() { //Defying a function and giving it a name.
    document.getElementById("Nested_Function").innerHTML = "My full name is " + Full_Name(); //Setting the "Nested_Fuction" id to display a string plus the result of the "Full_Name fuction"
    function Full_Name() { //defying a fuction a giving it a name
        var First_Middle = "Leonardo Steven "; //Defying a variable as a string
        function LastNames() {First_Middle += "Salazar Sánchez";} //Naming and defying a nested function in which our a string is added to the variable defined in the main function
        LastNames();
        return First_Middle; // Setting the final result of the Full_Name() function after the process of the nested function
    } 
}