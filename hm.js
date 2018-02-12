/* 
Author: Jamin Pottle
Date:2.9.18 

filename: hm.js
*/

//global variables

var guessWord = [];
var wrong = [];
var clicks = 0;
var guessesLeft = 6;
var score = 0;
var equalWords = false;

function getWord() {
    var inputWord = document.getElementById("word").value;
    if (inputWord === "") {
        document.getElementById("noWord").innerHTML = "Please enter a word :)";
    } else {
        document.getElementById("noWord").innerHTML = "";
    }
    //changes word to password so you can't read it
    document.getElementById("word").type = "password";
    console.log(inputWord);
}
document.getElementById("misses").innerHTML = "You missed " + clicks + " time. You have " + guessesLeft + " guesses left.";
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("writeWord").innerHTML = "Right Letters: ";
document.getElementById("writeWrong").innerHTML = "Wrong Letters: ";

function checkWord() {
    //local variables
    var guessLetter = document.getElementById("letter").value;
    var wordSplit = document.getElementById("word").value;
    var arraySplit = [];
    var guessWrong = false;
    var guessRight = false;
    guessWord.length = wordSplit.length;

    //displays text if check button is clicked and theres no word value
    if (wordSplit === "") {
        document.getElementById("noWord").innerHTML = "Please enter a word :)";
    } else {
        document.getElementById("noWord").innerHTML = "";
    }
    //for loop to split up word and push it to the wordSplit variable
    for (var i = 0; i < wordSplit.length; i++) {
        // console.log(wordSplit.charAt(i));
        arraySplit.push(wordSplit.charAt(i));
    }
    //for loop to populate text
    for (var i = 0; i < arraySplit.length; i++) {
        //if statement to see if guessLetter equals a value in the word, if it is it puts the word in proper place and writes it to the page
        if (arraySplit[i] === guessLetter) {
            guessWord[i] = guessLetter;
            document.getElementById("writeWord").innerHTML = "Right Letters: <br>" + guessWord;
            document.getElementById("letter").value = "";
            guessRight = true;
            score += 100;
            document.getElementById("score").innerHTML = "Score: " + score;
            if (guessWord.toString() === arraySplit.toString()) {
                equalWords = true;
            }
            if (equalWords == true) {
                alert("Winner winner chicken dinner!!! Your score is " + score);
                console.log("Winner winner chicken dinner");
            }
            // console.log("Yes!!");
            // console.log(arraySplit);
            // console.log(guessWord);
            // console.log(score);
        }

        //for if the letter doesn't belong in the word it puts it in another array then displays it so the player can see what they already guessed
        if (arraySplit[i] != guessLetter) {
            wrong[i] != guessLetter;
            wrong.push(guessLetter);
            document.getElementById("letter").value = "";
            //creates a new array that doesn't allow any duplicates to the web page it prints f instead of f,f,f,f,f...
            var rightWrong = Array.from(new Set(wrong));
            document.getElementById("writeWrong").innerHTML = "Wrong Letters: <br>" + rightWrong;
            guessWrong = true;
            // console.log(wrong);
            // console.log(rightWrong);
            // console.log(wrong.length);
        }

    }

    // checks if button is clicked and if the guess is wrong or right
    if (document.getElementById("checkButton").click && guessWrong == true && guessRight == false) {
        clicks++;
        guessesLeft--;
        score -= 50;
        document.getElementById("score").innerHTML = "Score: " + score;
        if (clicks == 1) {
            document.getElementById("misses").innerHTML = "You missed " + clicks + " time. You have " + guessesLeft + " guesses left.";
            document.getElementById("pic").src = "hm1.png";
        }
        if (clicks == 2) {
            document.getElementById("pic").src = "hm2.png";
        }
        if (clicks == 3) {
            document.getElementById("pic").src = "hm3.png";
        }
        if (clicks == 4) {
            document.getElementById("pic").src = "hm4.png";
        }
        if (clicks == 5) {
            document.getElementById("pic").src = "hm5.png";
        }
        if (clicks == 6) {
            document.getElementById("pic").src = "hm6.png";
        }

        if (clicks > 1) {
            document.getElementById("misses").innerHTML = "You missed " + clicks + " times. You have " + guessesLeft + " guesses left.";
        }
        if (clicks == 5) {
            document.getElementById("misses").innerHTML = "You missed " + clicks + " times. You have " + guessesLeft + " guess left.";
        }

        // console.log(clicks);
        // console.log(guessesLeft);
        // console.log(score);
    }
    // console.log(guessWord.length);
    // console.log(split);

}

function buttonClicks() {
    var fail = 6;
    if (clicks >= fail) {
        alert("You lost. Your score was " + score);
        console.log("LOSER!!");
    }
    document.getElementById("letter").value = "";
}


function checkLetter() {
    checkWord();
    buttonClicks();
}


document.getElementById("getWord").addEventListener("click", getWord);
document.getElementById("checkButton").addEventListener("click", checkLetter);