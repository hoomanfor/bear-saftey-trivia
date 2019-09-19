 
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
        E: "Yell and wave your hands", 
        correct_answer: "A"
    },
    {
        question: "You decide to continue along the salmon stream described in #3. All of sudden you are knocked to the ground and a bear has your shoulder in its teeth and is shaking you. It’s happening so fast that you can’t tell whether the bear is black or brown. What is the immediate thing you should do?",
        A: "Play dead",
        B: "Fight back",
        C: "Scream",
        D: "Lay on your stomach with your hands behind your neck", 
        E: "Play dead AND Lay on your stomach with your hands behind your neck", 
        correct_answer: "E"
    },
    {
        question: "The attack described in #4 persists for what seems like a long time. The bear is slowly and deliberately sniffing and licking you between bites. What is the next thing you should do?",
        A: "Play dead",
        B: "Fight back",
        C: "Scream!",
        D: "Lay on your stomach with your hands behind your neck", 
        E: "Fight back AND Scream!", 
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
        question: "The bear in #6 drops down to all four feet and begins to walk toward you, in no apparent hurry. Its ears are up and it is sniffing the air and looking at you. It has no cubs. What is the next thing you should do?",
        A: "Shoot into the air with your firearm",
        B: "Yell and wave your hands more vigorously",
        C: "Shoot the bear",
        D: "Avoid eye contact with the bear", 
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

var timer = 5;
var intervalId;
var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var running = true; 

function start() {
        $("#timer").text(timer);
        intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $("#timer").text(timer);
    if (timer == 0) {
        stop();
        timesUp()
        incorrect++;
        setTimeout(newQuestion, 5000);
    }
}

function stop() {
    clearInterval(intervalId);
}

function resetTimer() {
    stop();
    timer = 5; 
    start();
}

function renderQuestion(i) {
    var questionEl = $("<p>");
    questionEl.html(questions[i].question + "<br>" + 
    "<button type='button' class='choices' name='question-" + i + "' value='A' correct-value='" + questions[i].correct_answer + "'>" + questions[i].A + "<br>" + 
    "<button type='button' class='choices' name='question-" + i + "' value='B' correct-value='" + questions[i].correct_answer + "'>" + questions[i].B + "<br>" +
    "<button type='button' class='choices' name='question-" + i + "' value='C' correct-value='" + questions[i].correct_answer + "'>" + questions[i].C + "<br>" +
    "<button type='button' class='choices' name='question-" + i + "' value='D' correct-value='" + questions[i].correct_answer + "'>" + questions[i].D + "<br>" +
    "<button type='button' class='choices' name='question-" + i + "' value='E' correct-value='" + questions[i].correct_answer + "'>" + questions[i].E)
    $("#questions").html(questionEl);
}

function newQuestion() {
    $("#notification").html("");
    questionIndex++;
    renderQuestion(questionIndex);
    resetTimer()
}

function incorrectAnswer() {
    $("#timer").text("Wrong!");
    var reveal = questions[questionIndex].correct_answer;
    reveal = questions[questionIndex][reveal];
    var notiEl = $("<p>");
    notiEl.html("The correct answer was:<br>" + reveal);
    $("#notification").html(notiEl);
}

function timesUp() {
    $("#timer").text("Times Up!");
    var reveal = questions[questionIndex].correct_answer;
    reveal = questions[questionIndex][reveal];
    var notiEl = $("<p>");
    notiEl.html("The correct answer was:<br>" + reveal);
    $("#notification").html(notiEl);
}

function correctAnswer() {
    $("#timer").text("Correct!");
}

$("#start").click(function(event) {
    $(this).css("display", "none");
    $(".questions").css("display", "block");
    start();
    renderQuestion(questionIndex);
});

$(document).on("click", ".choices", function() {
    if ($(this)[0].attributes[3].value === $(this)[0].attributes[4].value) {
        correct++;
        stop();
        correctAnswer()
        setTimeout(newQuestion, 5000);
        running = false
    } else {
        incorrect++;
        stop();
        incorrectAnswer()
        setTimeout(newQuestion, 5000);
        running = false
    }
    console.log("correct: ", correct);
    console.log("incorrect: ", incorrect);
});

// Look into this for disabling my button. 
// document.getElementById("myBtn").disabled = true;

// Display one question at a time. Until the user answers it or time runs out. 
	// How do I display one question at a time?
		// On Start, I need to render a question. 
// Each question has a time limit (5 seconds)
// If the User selects the correct answer.
	// Congratulate the user.
	// After a few seconds, display the next question without user input.
		//Write a function which sets a 3 second interval period in-between questions. 
// If the User selects an incorrect answer. 
	// The correct answer is revealed.
		//Write a function which displays the correct answer.
	// After a few seconds, display the next question without user input.
// If the user does not select an answer. Time-outs
	// The correct answer is revealed.
	// After a few seconds, display the next question without user input.
//Once all the questions have been prompted. 
	// Display the number of questions answered correctly.
	// Display the number of questions answered incorrectly.
	// An option to restart the game. 

// On start, render a question.

// I need to change the potential answers into buttons.
// Give a class to the potential answers. 
		// On “Click”, check if attributes: “value” and “correct-value” are equal
			// If correct: 
				// congratulate user 
				// +1 to correct counter
				// set 3 second countdown
			// If incorrect:
				// display correct answer
				// +1 to incorrect counter
				// set 3 second countdown

// function calculateMetrics() {
//     var answers = $("input:checked");
//     for (var i = 0; i < answers.length; i++) {
//         if (answers[i].attributes[2].value === answers[i].attributes[3].value) {
//             correct++;
//             answered++;
//         } else {
//             incorrect++; 
//             answered++;
//         }
//     }
// }

// function displayMetrics() {
//     $(".questions").empty();
//     unAnswered = unAnswered - answered; 
//     var metricsDiv = $("<div class='metrics' id='metrics'>")
//     metricsDiv.html("<h2>All Done!</h2>" + "<p>Correct: " + correct + "</p>" + "<p>Incorrect: " + incorrect + "</p>" + "<p>Unanswered: " + unAnswered + "</p>");
//     $(".questions").append(metricsDiv);
// }