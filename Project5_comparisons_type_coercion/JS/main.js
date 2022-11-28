document.write(typeof "word"); //Using the document.write to display the typeof "string"

document.write(typeof 3); //Using the document.write  to display the typeof "number"

document.write("10" + 5); //Using the document.write to display a combination between a stringg and a number

function NoNumber() { //Defining a  function and naming it.
    document.getElementById("NaN").innerHTML = 0 / 0; //Dividing 0 by 0 to display NaN
}

function TFunction() { //Defining a  function and naming it.
    document.getElementById("True").innerHTML = isNaN('string'); //Using NaN to display True
}

function FFunction() { //Defining a  function and naming it.
    document.getElementById("False").innerHTML = isNaN('300'); //Using NaN to display Flase
}

function InfiFunc() { //Defining a  function and naming it.
    document.getElementById("Infinity").innerHTML = 3E310; //Using a very lasrge number to display infinity
}

function BooTFunc() { //Defining a  function and naming it.
    document.getElementById("BooT").innerHTML = 10 > 2; //using the greater than Boolean Operator to display true
}

function BooFFunc() { //Defining a  function and naming it.
    document.getElementById("BooF").innerHTML = 10 < 2; //Using the less than Boolean Operator to display false
}

function Equal_Function() { //Defining a  function and naming it.
    document.getElementById("Equal").innerHTML = (10 == 10); //Using  the double equal tp display true
}

function Not_Equal() {  //Defining a  function and naming it.
    document.getElementById("NotEqual").innerHTML = (3 == 10); //Using the double equal to display false
}

function Triple_Equal() { //Defining a  function and naming it.
    document.getElementById("TEqual").innerHTML = (8 === 8); //Using the tripple equal to display true
    document.getElementById("TNOTEqual").innerHTML = ("eight" === 8); //Using the triple equal to display false
    document.getElementById("Tequal").innerHTML = ("8" === 8); //Using the triple equal tp display false
    document.getElementById("TnotEqual").innerHTML = (8 === 10); //Using the triple equal to display false
}

function And() { //Defining a  function and naming it.
    document.getElementById("AndTrue").innerHTML = (5>2 && 7>1); //Using the And Boolean Operator to display ture
    document.getElementById("AndFalse").innerHTML = (5<2  && 7>1); //Using the And Boolean Operator to display false
}

function Or() { //Defining a  function and naming it.
    document.getElementById("OrTrue").innerHTML = (5>10 || 10>4) //Using the Or Boolean Operator to display true
    document.getElementById("OrFalse").innerHTML = (5>10 || 4>8) // Usingg gthe Or Boolean Operator to display false
}

function Not() { //Defining a  function and naming it.
    document.getElementById("NotTrue").innerHTML = !(20<10); //Using the Not Boolean Operator to display true
    document.getElementById("NotFalse").innerHTML = !(20>10); //Using the Not Boolean Operator to display false
}