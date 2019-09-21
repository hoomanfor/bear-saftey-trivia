 
var questions = [
    {
        question: "You are bushwhacking through dense alders and you surprise a bear at 50 feet. The bear sees you and you see the bear. What is the first thing you should do?",
        A: "Shoot your firearm into the air",
        B: "Stand your ground and talk to the bear",
        C: "Turn back and move away, looking over your shoulder",
        D: "Pepper spray the bear", 
        E: "Shoot the bear.", 
        correct_answer: "B"
    },
    {
        question: "You are bushwhacking through dense alders and you surprise a bear at 50 feet. The bear sees you and you see the bear. You don’t know whether it is an adult female or an adult male, or whether it has cubs. What is the first thing you should do?",
        A: "Immediately pursue the bear",
        B: "Stand your ground and talk to the bear",
        C: "Turn back and move away, looking over your shoulder",
        D: "Pepper spray the bear", 
        E: "Shoot the bear.", 
        correct_answer: "B"
    },
    {
        question: "You are walking up a narrow salmon stream in thick forest, counting salmon as you go. You hear the splash of footsteps of footsteps behind and you look to see a bear absorbed in chasing spawning salmon. You didn’t see the bear well. What is the first thing that you should do?",
        A: "Get out of the stream and walk into the forest",
        B: "Follow the bear",
        C: "Shoot your firearm into the air",
        D: "Call for a helicopter", 
        E: "Yell & wave your hands", 
        correct_answer: "A"
    },
    {
        question: "You decide to continue along the salmon stream when all of sudden, you are knocked to the ground, and a bear has your shoulder in its teeth and is shaking you. It’s happening so fast that you can’t tell whether the bear is black or brown. What is the immediate thing you should do?",
        A: "Play dead",
        B: "Fight back",
        C: "Scream",
        D: "Lay on your stomach with your hands behind your neck", 
        E: "'Play dead' & 'Lay on your stomach with your hands behind your neck'", 
        correct_answer: "E"
    },
    {
        question: "The attack described which has been described lasts for a long time. The bear is slowly and deliberately sniffing and licking you between bites. What is the next thing you should do?",
        A: "Play dead",
        B: "Fight back",
        C: "Scream!",
        D: "Lay on your stomach with your hands behind your neck", 
        E: "'Fight back' & 'Scream!'", 
        correct_answer: "E"
    },
    {
        question: "You are walking on open tundra. You see a brown bear about 100 yards away and it stands on its hind legs and looks at you while sniffing the air. What is the first thing you should do?",
        A: "Turn and walk away quickly",
        B: "Move to the closest high ground",
        C: "Yell and wave your hands",
        D: "Avoid eye contact with the bear", 
        E: "Hide behind the nearest obstacle", 
        correct_answer: "C"
    },
    {
        question: "That same standing bear has now dropped down to all four feet and begins to walk toward you, in no apparent hurry. Its ears are up and it is sniffing the air and looking at you. It has no cubs. What is the next thing you should do?",
        A: "Shoot into the air with your firearm",
        B: "Yell and wave your hands more vigorously",
        C: "Shoot the bear",
        D: "Avoid eye contact with the bear", 
        E: "Stand completely still",
        correct_answer: "B"
    },
    {
        question: "Bear spray should be effective up to how many feet way?",
        A: "30 feet away",
        B: "45 feet away",
        C: "3 feet away",
        D: "200 feet away", 
        E: "60 feet away",
        correct_answer: "A"
    },
    {
        question: "You are hiking on the open tundra and you see a bear at a distance of 300 feet but it does not see you. What is the first thing you should do?",
        A: "Yell and wave your hands",
        B: "Shoot into the air with your firearm",
        C: "Move to the closest high ground",
        D: "Get your pepper spray ready", 
        E: "Change your route to avoid the bear", 
        correct_answer: "E"
    }
]

var timer = 45;
var intervalId;
var correct = 0;
var incorrect = 0;
var questionIndex = 0;

function start() {
        $(".timer").html(timer + " seconds remain to make a selection");
        $(".timer").css("text-align", "right");
        intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timer").html(timer + " seconds remain to make a selection");
    $(".timer").css("text-align", "right");
    if (timer == 0) {
        $(".choices").prop("disabled", true);
        stop();
        timesUp()
        incorrect++;
        setTimeout(newQuestion, 1000);
    }
}

function stop() {
    clearInterval(intervalId);
}

function resetTimer() {
    stop();
    timer = 45; 
    start();
}

function renderQuestion(i) {
    var questionEl = $("<div>");
    questionEl.html("<p class='dom-question'>" + questions[i].question + "</p>" +
    "<button type='button' class='choices' name='question-" + i + "' value='A' correct-value='" + questions[i].correct_answer + "'>" + questions[i].A + "</button>" +
    "<button type='button' class='choices' name='question-" + i + "' value='B' correct-value='" + questions[i].correct_answer + "'>" + questions[i].B + "</button>" +
    "<button type='button' class='choices' name='question-" + i + "' value='C' correct-value='" + questions[i].correct_answer + "'>" + questions[i].C + "</button>" +
    "<button type='button' class='choices' name='question-" + i + "' value='D' correct-value='" + questions[i].correct_answer + "'>" + questions[i].D + "</button>" +
    "<button type='button' class='choices' name='question-" + i + "' value='E' correct-value='" + questions[i].correct_answer + "'>" + questions[i].E + "</button>")
    $("#questions").html(questionEl);
}

function newQuestion() {
    $("#notification").html("");
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        renderQuestion(questionIndex);
        resetTimer()
    } else {
        displayMetrics()
    }
}

function incorrectAnswer() {
    $(".timer").text("Wrong!");
    $(".timer").css("text-align", "center");
    var reveal = questions[questionIndex].correct_answer;
    reveal = questions[questionIndex][reveal];
    var notiEl = $("<p>");
    notiEl.html("The correct answer was:<br>" + reveal);
    $("#notification").html(notiEl);
}

function timesUp() {
    $(".timer").text("Times Up!");
    $(".timer").css("text-align", "center");
    var reveal = questions[questionIndex].correct_answer;
    reveal = questions[questionIndex][reveal];
    var notiEl = $("<p>");
    notiEl.html("The correct answer was:<br>" + reveal);
    $("#notification").html(notiEl);
}

function correctAnswer() {
    $(".timer").text("Correct!");
    $(".timer").css("text-align", "center");
}

function displayMetrics() {
    $(".timer").css("display", "none");
    $("#questions").html("");
    var metricsEl = $("<div>");
    metricsEl.html("<p>Number of questions answered correctly: " + correct + "</p><p>Number of questions answered incorrectly: " + incorrect + "</p>" + 
    "<button type='button' class='reset'>New Game</button>")
    $("#questions").html(metricsEl);
}

$("#start").click(function(event) {
    $(this).css("display", "none");
    $(".questions").css("display", "block");
    start();
    renderQuestion(questionIndex);
});

$(document).on("click", ".choices", function() {
    if ($(this)[0].attributes[3].value === $(this)[0].attributes[4].value) {
        $(".choices").prop("disabled", true);
        correct++;
        stop();
        correctAnswer()
        setTimeout(newQuestion, 1000);
    } else {
        $(".choices").prop("disabled", true);
        incorrect++;
        stop();
        incorrectAnswer()
        setTimeout(newQuestion, 1000);
    }
    console.log("correct: ", correct);
    console.log("incorrect: ", incorrect);
    console.log("questionIndex: ", questionIndex);
});

$(document).on("click", ".reset", function() {
    $(".timer").css("display", "block");
    timer = 5;
    intervalId;
    correct = 0;
    incorrect = 0;
    questionIndex = 0;
    start();
    renderQuestion(questionIndex);
})
