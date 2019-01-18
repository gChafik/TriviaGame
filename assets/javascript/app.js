let questions = {
    q1: {question:"Which built-in method removes the last element from an array and returns that element?",
    answers: ["last()", "get()", "pop()", "push()"],
    correctAnswer: "pop()",
    },
    q2: {question: "Which of the following function of Number object returns a string value version of the current number?",
    answers: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
    correctAnswer: "toString()",
    },
    q3: {question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    answers: ["slice()", "split()", "substr()", "search()"],
    correctAnswer: "substr()",
    },
    q4: {question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    answers: ["anchor()", "big()", "blink()", "bold()"],
    correctAnswer: "bold()",
    },
    q5: {question: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
    answers: ["sup()", "small()", "strike()", "sub()"],
    correctAnswer: "strike()",
    },
    q6: {question: "Which of the following function of Array object returns a string representing the array and its elements?",
    answers: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswer: "toString()",
    },
    q7: {question: " Which of the following function of Array object removes the last element from an array and returns that element?",
    answers: ["pop()", "push()", "join()", "map()"],
    correctAnswer: "pop()",
    },
    q8: {question: " Which of the following function of Array object adds an element to the end of an array?",
    answers: ["pop()", "push()", "join()", "map()"],
    correctAnswer: "push()",
    },
    q9: {question: " How do you write 'Hello World' in an alert box?",
    answers: ["alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')", "msg('Hello World')"],
    correctAnswer: "alert('Hello World')",
    },
    q10: {question: " How to write an IF statement in JavaScript?",
    answers: ["if i = 5", "if i = 5 then", "if i == 5 then", "if (i == 5)"],
    correctAnswer: "if (i == 5)",
    },
}

$("#time").text("time");
//variable to hold the setInterval when we start the questions
let questionNum = 0;
var showQuestion;
var count = 0;
var intervalId;
var clockRunning = false;
var number = 5;
$("#time").text("00:00")
$("#start").click(startSlideShow);
$("#stop").click(stopSlideShow);
// $("#start").on("click", function() {
    
//     displayQuestion();
//   });

//Variable to keep track of the index of the currently displaying question



function displayQuestion(){
    $("#question").empty();
    $("#answers").empty();
    intervalId = setInterval(decrement, 1000);
    for (let index = 0; index < questions.length; index++) {
        $("#question").questions.q1.question;
        $("#answers").questions.q1.answers;
        
    }
}

function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#time").html(number);


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

function nextQuestion(){
    count++;
    setTimeout(displayQuestion, 3000);
    if (count === q.length) {
        count = 0;
      }
}

function startSlideShow(){
    showQuestion = setInterval(nextQuestion, 3000);
    
}

function stopSlideShow(){
    clearInterval(showQuestion);
}

function answer(){
    $("#a1").on("click", function(){
        $("#qanda").text("Correct!");
        stop();
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
