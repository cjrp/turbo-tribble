//Java script code goes here

//Array with set of colors
var colors = new Array("blue", "green", "red", "gray", "orange", "aqua", "brown", "black", "purple", "chocolate", "magenta", "indigo", "violet", "sienna", "yellow");
var i = 0;
//Function to keep changing the color of the text
function changeTextColor() {

    i %= 15;
    document.getElementById("myHeader").style.color = colors[i];
    i++;

    setTimeout(changeTextColor, 2000);
};

//OnClick Submit button from the user form - hide the mainDivBox
function toggleDiv() {
    if (document.getElementById("mainDivBox").style.display == "block") {
        document.getElementById("mainDivBox").style.display = "none";
        document.getElementById("secondDivBox").style.display = "block";
    }
}

//Global variables for calculating time taken for the user to respond
var startTime = 0;
var endTime = 0;

function onClickOperator(control)
{
    document.getElementById("finalResultsBox").style.display = "none";
    questionsCount = 0;
    correctAnswer = 0;
    wrongAnswer = 0;

	var sign = "+";
    switch (control.value)
    {
        case "Addition":
            sign = "+";
            break;
        case "Subtraction":
            sign = "-";
            break;
        case "Multiplication":
            sign = "*";
            break;
        case "Division":
            sign = "/";
            break;
        default:
            sign = "+";
    }
	
	document.getElementById("sign").innerHTML = sign;
	displayQuestionChoices();
}

function displayQuestionChoices() {
	var choices = document.getElementById("questionsChoiceBox");
	choices.style.display = "block";
}

var minValue;
var maxValue;
var denominator;

function setChoiceAndStart(control) {

	document.getElementById("questionsChoiceBox").style.display = "none";

	switch(control.value)
	{
	case "Single Digit":
		minValue = 0;
		maxValue = 9;
		denominator = 1;
		break;
	case "Double Digit":
		minValue = 0;
		maxValue = 99;
		denominator = 1;
		break;
	case "Triple Digit":
		minValue = 0;
		maxValue = 999;
		denominator = 1;
		break;
	case "Decimal Values":
		minValue = 0;
		maxValue = 9999;
		denominator = 100;
		break;
	default:
		minValue = 0;
		maxValue = 9;
		denominator = 1;
	}
	
	document.getElementById("questionsBox").style.display = "block";
	questionDisplay();
    startTime = new Date().getTime();
    questionDisplay();
}


function questionDisplay() {
    var firstNumber = (minValue + Math.floor(Math.random() * maxValue)) / denominator;
    var secondNumber = (minValue + Math.floor(Math.random() * maxValue)) / denominator;
    document.getElementById("firstNumberLabel").innerHTML = firstNumber;
    document.getElementById("secondNumberLabel").innerHTML = secondNumber;
    var textBox = document.getElementById("addAnswer");
    textBox.value = "";
    textBox.focus();
    questionsCount++;
}

//Setting global parameters to calculate the correct and wrong answer
var correctAnswer = 0;
var wrongAnswer = 0;
var questionsCount = 0;

function getResult(number1, number2, sign) {
	switch (sign)
	{
		case "+":
			return number1 + number2;
		case "-":
			return number1 - number2;
		case "*":
			return number1 * number2;
		case "/":
			return number1 / number2;
		default:
			throw "invalid sign";
	}
}

//Function when clicking on enter key
function pressEnter() {
    if (event.keyCode == 13) {
        var firstNumber = parseInt(document.getElementById("firstNumberLabel").innerHTML);
        var secondNumber = parseInt(document.getElementById("secondNumberLabel").innerHTML);
		var sign = document.getElementById("sign").innerHTML;
		var result = getResult(firstNumber, secondNumber, sign);		
		
        if (parseInt(document.getElementById("addAnswer").value) === result) {
            correctAnswer++;
        }
        else {
            wrongAnswer++;
        }
		
        if (questionsCount <= 20) {
            questionDisplay();
        }
        else {
            endTime = new Date().getTime();
            publishingAdditionResults();
        }
    }
}

function publishingAdditionResults() {
    document.getElementById("questionsBox").style.display = "none";
    document.getElementById("finalResultsBox").style.display = "block";
    var elapsedSeconds = (endTime - startTime)/1000;
    document.getElementById("resultsSummary").innerHTML = "Total number of questions : " + (correctAnswer + wrongAnswer) + "--> You have got " + correctAnswer + " " + "correct, You have got " + wrongAnswer + " " + "wrong. It took " + elapsedSeconds + " " + "seconds to solve";   
}

onload = changeTextColor;
