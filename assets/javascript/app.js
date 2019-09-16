 
var questions = [
    {
        question: "3. You are walking up a narrow salmon stream in thick forest, counting salmon as you go. You hear the splash of footsteps of footsteps behind and you look to see a bear absorbed in chasing spawning salmon. You didn’t see the bear well. What is the first thing that you should do?",
        A: "A. Get out of the stream and walk into the forest",
        B: "B. Follow the bear",
        C: "C. Shoot your firearm into the air",
        D: "D. Call for a helicopter", 
        E: "E. Yell and wave your hands", 
        correct_answer: "A"
}
]

var timer = 5;
var intervalId;
var correct = 0;
var incorrect = 0;

function start() {
    $("#timer").text(timer);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $("#timer").text(timer);
    if (timer == 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}


var questionsKeys = Object.keys(questions[0]);
console.log("questionsKey", questionsKeys)

var questionP = $("<p>");
questionP.text(questions[0].question)
$("#questions").append(questionP);

var aP = $("<p>");
var aInput = $("<input>");
aInput.attr("type", "radio");
aInput.attr("name", questionsKeys[0] + "-" + 0);
aInput.attr("value", "A");
aInput.attr("correct-value", questions[0].correct_answer);
aP.addClass("q1-a")
aP.html(aInput);
$("#questions").append(aP);
$(".q1-a").append(questions[0].A);

// var bP = $("<p>");
// var bInput = $("<input>");
// bInput.attr("type", "radio");
// bInput.attr("name", questionsKeys[0] + "-" + 0);
// bInput.attr("value", "B");
// bInput.attr("correct-value", questions[0].correct_answer);
// bP.addClass("q1-b")
// bP.html(bInput);
// $("#questions").append(bP);
// $(".q1-b").append(questions[0].B);

// var cP = $("<p>");
// var cInput = $("<input>");
// cInput.attr("type", "radio");
// cInput.attr("name", questionsKeys[0] + "-" + 0);
// cInput.attr("value", "C");
// cInput.attr("correct-value", questions[0].correct_answer);
// cP.addClass("q1-c")
// cP.html(cInput);
// $("#questions").append(cP);
// $(".q1-c").append(questions[0].C);

// var dP = $("<p>");
// var dInput = $("<input>");
// dInput.attr("type", "radio");
// dInput.attr("name", questionsKeys[0] + "-" + 0);
// dInput.attr("value", "D");
// dInput.attr("correct-value", questions[0].correct_answer);
// dP.addClass("q1-d")
// dP.html(dInput);
// $("#questions").append(dP);
// $(".q1-d").append(questions[0].D);

// var eP = $("<p>");
// var eInput = $("<input>");
// eInput.attr("type", "radio");
// eInput.attr("name", 0);
// eInput.attr("value", "E");
// eInput.attr("correct-value", questions[0].correct_answer);
// eP.addClass("q1-e")
// eP.html(eInput);
// $("#questions").append(eP);
// $(".q1-e").append(questions[0].E);


$("#start").click(function(event) {
    $(this).css("display", "none");
    $(".questions").css("display", "block");
    start()
});

$("#done").click(function(event) {
    var answers = $("input:checked");
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].attributes[3].value === "true") {
            correct++;
        } else {
            incorrect++; 
        }
    }
})


// Using $("input") to capture all elements
// var answers = $("input");
// for (var i = 0; i < answers.length; i++) {
//     console.log(answers[i].attributes[3].value)
// }