
//Number variables
var numberOne =0;
var numberTwo=0;
var resultNumber =0;


//Button variables
    //Number variables
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven =document.getElementById("seven");
const eight=document.getElementById("eight");
const nine = document.getElementById("nine");
const zero =document.getElementById("zero");
    //Action variables
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide =document.getElementById("divide");
const multi =document.getElementById("multi");
const equals = document.getElementById("equals");
const DEL = document.getElementById("DEL");
    //Display variables
const result = document.getElementById("result");
const formula =document.getElementById("formula");


//Button events
    //Number Buttons
one.addEventListener("click", function(){addNumber(1)});
two.addEventListener("click", function(){addNumber(2)});
three.addEventListener("click", function(){addNumber(3)});
four.addEventListener("click", function(){addNumber(4)});
five.addEventListener("click", function(){addNumber(5)});
six.addEventListener("click", function(){addNumber(6)});
seven.addEventListener("click", function(){addNumber(7)});
eight.addEventListener("click", function(){addNumber(8)});
nine.addEventListener("click", function(){addNumber(9)});
zero.addEventListener("click", function(){addNumber(0)});
    //Action Buttons
    DEL.addEventListener("click", deleteDisplay);
    plus.addEventListener("click", function(){plusAction(resultNumber)});
    minus.addEventListener("click", function(){minusAction(resultNumber)});
    multi.addEventListener("click", function(){multiAction(resultNumber)});
    divide.addEventListener("click", function(){divideAction(resultNumber)});
    equals.addEventListener("click", equalsAction);



//Functions
function deleteDisplay(){
    resultNumber =0;
    numberOne = 0;
    numberTwo=0;
    result.innerHTML="";
    formula.innerHTML="";
}

function equalsAction(){
    if(formula.innerHTML != ""){
        var seged = formula.innerHTML.split(" ");
        switch(seged[1]){
            case "+":result.innerHTML = numberOne + resultNumber;
            resultNumber = Number(result.innerHTML);
            formula.innerHTML = "";
            break;
            case "-":result.innerHTML = numberOne - resultNumber;
            resultNumber = Number(result.innerHTML);
            formula.innerHTML = "";
            break;
            case "*":result.innerHTML = numberOne * resultNumber;
            resultNumber = Number(result.innerHTML);
            formula.innerHTML="";
            break;
            case "/":result.innerHTML = numberOne / resultNumber;
            resultNumber = Number(result.innerHTML);
            formula.innerHTML="";
            break;
            default: console.log("Something went wrong");
        }
    }
}

function addNumber(number){
    result.innerHTML += number;
    resultNumber = Number(result.innerHTML);
}

function plusAction(number){
    if(formula.innerHTML == ""){
        formula.innerHTML = number + " +";
        numberOne= resultNumber;
        resultNumber=0; 
        result.innerHTML ="";
    }
    else if(formula.innerHTML != "" && result.innerHTML != ""){
        resultNumber= number + numberOne;        
        formula.innerHTML = resultNumber + " +";
        numberOne = resultNumber;
        resultNumber = 0;
        result.innerHTML ="";
    }
    else{
        result.innerHTML ="FUCK YOU";
    }   
}

function minusAction(number){
    if(formula.innerHTML == ""){
        formula.innerHTML = number + " -";
        numberOne= resultNumber;
        resultNumber=0; 
        result.innerHTML ="";
    }
    else if(formula.innerHTML != "" && result.innerHTML != ""){
        resultNumber= number - numberOne;        
        formula.innerHTML = resultNumber + " -";
        numberOne = resultNumber;
        resultNumber = 0;
        result.innerHTML ="";
    }
    else{
        result.innerHTML ="FUCK YOU";
    }   
}

function multiAction(number){
    if(formula.innerHTML == ""){
        formula.innerHTML = number + " *";
        numberOne= resultNumber;
        resultNumber=0; 
        result.innerHTML ="";
    }
    else if(formula.innerHTML != "" && result.innerHTML != ""){
        resultNumber= number * numberOne;        
        formula.innerHTML = resultNumber + " *";
        numberOne = resultNumber;
        resultNumber = 0;
        result.innerHTML ="";
    }
    else{
        result.innerHTML ="FUCK YOU";
    }
}

function divideAction(number){
    if(formula.innerHTML == ""){
        formula.innerHTML = number + " /";
        numberOne= resultNumber;
        resultNumber=0; 
        result.innerHTML ="";
    }
    else if(formula.innerHTML != "" && result.innerHTML != ""){
        resultNumber= number / numberOne;        
        formula.innerHTML = resultNumber + " /";
        numberOne = resultNumber;
        resultNumber = 0;
        result.innerHTML ="";
    }
    else{
        result.innerHTML ="FUCK YOU";
    }
}

