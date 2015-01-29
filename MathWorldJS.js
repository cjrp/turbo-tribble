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

    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    document.getElementById("firstNumberLabel").innerHTML = firstNumber;
    document.getElementById("secondNumberLabel").innerHTML = secondNumber;
}

function pressEnter() {
    if (event.keyCode == 13) {
        var firstNumber = parseInt(document.getElementById("firstNumberLabel").innerHTML);
        var secondNumber = parseInt(document.getElementById("secondNumberLabel").innerHTML);
        if (parseInt(document.getElementById("addAnswer").value) === (firstNumber + secondNumber)) {
            alert("correct");
        }
        else {
            alert("wrong");
        }
    }
    //if (event.keyCode == 13) {
    //    var countOfQuestions = 1;
    //    var correctAnswer = 0;
    //    var wrongAnswer = 0;

    //    while (countOfQuestions < 5) {
    //        var firstNumber = Math.floor(Math.random() * 10);
    //        var secondNumber = Math.floor(Math.random() * 10);
    //        document.getElementById("firstNumberLabel").innerHTML = firstNumber;
    //        document.getElementById("secondNumberLabel").innerHTML = secondNumber;
            
    //        if (document.getElementById("addAnswer").value === (firstNumber + secondNumber)) {
    //            correctAnswer++;
    //        }
    //        else {
    //            wrongAnswer++;
    //        }
    //        document.getElementById("addAnswer").value = "";
    //        countOfQuestions++;
    //    }
    //}
    //return correctAnswer;
}

function onClickingEnd() {
    var correctAnswersNumber = pressEnter();
    alert("You have" + correctAnswersNumber + "correct");
}

onload = changeTextColor;
