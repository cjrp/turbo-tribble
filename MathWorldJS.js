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

//OnClick: Addition Button
function onClickAddition() {
    document.getElementById("questionsBox").style.display = "block";
    //var list = document.getElementById("additionOptionsBox");
    //var length = document.getElementsByClassName("additionInputBlock").length;
    //for (var i = 0; i < length; i++)
    //{
    //    x.getElementsByClassName("additionInputBlock")[i].style.display = "block";
    //}
    questionsCount = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    document.getElementById("finalResultsBox").style.display = "none";
    questionDisplay();
}

function questionDisplay() {
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
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
        if (questionsCount < 20) {
            questionDisplay();
        }
        else {
            publishingAdditionResults();

        }
    }
   }

function publishingAdditionResults() {
    document.getElementById("questionsBox").style.display = "none";
    document.getElementById("finalResultsBox").style.display = "block";
    document.getElementById("resultsSummary").innerHTML = "Total number of quetions : 20 --> You have got " +correctAnswer + " " + "correct, You have got " +wrongAnswer + " " + "wrong;";   
}

onload = changeTextColor;
