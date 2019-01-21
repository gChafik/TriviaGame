let questionNum = 1;
let showQuestion;
let count = 0;
let intervalId;
let clockRunning = false;
let number = 5;
let questions = {
    1: {question:"Which built-in method removes the last element from an array and returns that element?",
    answers: ["last()", "get()", "pop()", "push()"],
    correctAnswer: "pop()",
    },
    2: {question: "Which of the following function of Number object returns a string value version of the current number?",
    answers: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
    correctAnswer: "toString()",
    },
    3: {question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    answers: ["slice()", "split()", "substr()", "search()"],
    correctAnswer: "substr()",
    },
    4: {question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    answers: ["anchor()", "big()", "blink()", "bold()"],
    correctAnswer: "bold()",
    },
    5: {question: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
    answers: ["sup()", "small()", "strike()", "sub()"],
    correctAnswer: "strike()",
    },
    6: {question: "Which of the following function of Array object returns a string representing the array and its elements?",
    answers: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswer: "toString()",
    },
    7: {question: " Which of the following function of Array object removes the last element from an array and returns that element?",
    answers: ["pop()", "push()", "join()", "map()"],
    correctAnswer: "pop()",
    },
    8: {question: " Which of the following function of Array object adds an element to the end of an array?",
    answers: ["pop()", "push()", "join()", "map()"],
    correctAnswer: "push()",
    },
    9: {question: " How do you write 'Hello World' in an alert box?",
    answers: ["alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')", "msg('Hello World')"],
    correctAnswer: "alert('Hello World')",
    },
    10: {question: " How to write an IF statement in JavaScript?",
    answers: ["if i = 5", "if i = 5 then", "if i == 5 then", "if (i == 5)"],
    correctAnswer: "if (i == 5)",
    },
}

$("#time").text("00:00")
$("#start").on("click", run);
$("#stop").on("click", stop);

//Variable to keep track of the index of the currently displaying question

function displayQuestion(){
    $("#question").empty();
    $("#answers").empty();
    let quest = questions[questionNum].question;
    $("#question").append($("<div>")).append(quest);

    intervalId = setInterval(decrement, 1000);
    for (let index = 0; index < 4; index++) {
        let ans = questions[questionNum].answers[index];
        let newH3 = $("<h3>");
        newH3.append(ans);
        $("#answers").append(newH3);
        console.log("answers " + questions[questionNum].answers[index])
    }
}
function run() {
    console.log("run function has been run");
    console.log("questions[questionNum].question " + questions[questionNum].question);
    clearInterval(intervalId);
    displayQuestion();
  }

function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#time").html(number);
    //  Once number hits zero
    if (number <= 0) {
      //run the stop function.
        stop();
        clearInterval(intervalId);
        number = 5;
      //  Alert the user that time is up.
      console.log("number " + number);
      console.log("intervalID " + intervalId);
      console.log("Time Up!");
    }
  }

function answer(ans){
    $("#answers").on("click", function(){
        if(ans === questions[questionNum.answers]){
            console.log("Correct Answer!");
            $("#answers").empty();
            $("#answers").text("Correct Answer!");
        }
        else if(this !== questions[questionNum.answers]){
            console.log("Wrong Answer!");
            $("#answers").empty();
            $("#answers").text("Wrong Answer");
        }
        stop();
        nextQuestion();
    });
}

//Clear timer
function stop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
  }
//answer();
//stopSlideShow();
//displayQuestion();
