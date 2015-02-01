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

////Temporary : OnClick funtion for the submit button in the username form
// function onClickSubmit () {
//     var fname = document.getElementById("firstname").value;
//     var lname = document.getElementById("lastname").value;
//     alert(fname + lname);
// };

//OnClick Submit button from the user form - hide the mainDivBox
function toggleDiv() {
    //var fname = document.getElementById("firstname").value;
    //var lname = document.getElementById("lastName").value;
    //var userName = fname + lname;
          if (document.getElementById("mainDivBox").style.display == "block") {
            document.getElementById("mainDivBox").style.display = "none";
            document.getElementById("secondDivBox").style.display = "block";
        
    }
}
//Global variables for calculating time taken for the user to respond
var startTime = 0;
var endTime = 0;
//OnClick: Addition Button
function onClickAddition() {
    questionsCount = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    document.getElementById("finalResultsBox").style.display = "none";
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

//Function on click subtraction
function onClickSubtraction() {

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
    //TODO:
    //Second digit , three digit and decimal questions
    //var first2DigitNumber = math.floor(math.random() * 90 + 10);
    //var second2DigitNumber = Math.floor(math.random() * 90 + 10);
}

//Setting global parameters to calculate the correct and wrong answer
var correctAnswer = 0;
var wrongAnswer = 0;
var questionsCount = 0;


//Function when clicking on enter key
function pressEnter() {
    if (event.keyCode == 13) {
        var firstNumber = parseInt(document.getElementById("firstNumberLabel").innerHTML);
        var secondNumber = parseInt(document.getElementById("secondNumberLabel").innerHTML);
        if (parseInt(document.getElementById("addAnswer").value) === (firstNumber + secondNumber)) {
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
    var finalMinutes = (endTime - startTime)/1000;
    document.getElementById("resultsSummary").innerHTML = "Total number of quetions : 20 --> You have got " +correctAnswer + " " + "correct, You have got " +wrongAnswer + " " + "wrong. It took " +finalMinutes + " " + "seconds to solve";   
}

onload = changeTextColor;
