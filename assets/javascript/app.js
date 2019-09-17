 
var questions = [
    {
        question: "1. You are bushwhacking through dense alders and you surprise a bear at 50 feet. The bear sees you and you see the bear. What is the first thing you should do?",
        A: "A. Shoot your firearm into the air",
        B: "B. Stand your ground and talk to the bear",
        C: "C. Turn back and move away, looking over your shoulder",
        D: "D. Pepper spray the bear", 
        E: "E. Shoot the bear.", 
        correct_answer: "B"
    },
    {
        question: "2. You are bushwhacking through dense alders and you surprise a bear at 50 feet. The bear sees you and you see the bear. You don’t know whether it is an adult female or an adult male, or whether it has cubs. What is the first thing you should do?",
        A: "A. Immediately pursue the bear",
        B: "B. Stand your ground and talk to the bear",
        C: "C. Turn back and move away, looking over your shoulder",
        D: "D. Pepper spray the bear", 
        E: "E. Shoot the bear.", 
        correct_answer: "B"
    },
    {
        question: "3. You are walking up a narrow salmon stream in thick forest, counting salmon as you go. You hear the splash of footsteps of footsteps behind and you look to see a bear absorbed in chasing spawning salmon. You didn’t see the bear well. What is the first thing that you should do?",
        A: "A. Get out of the stream and walk into the forest",
        B: "B. Follow the bear",
        C: "C. Shoot your firearm into the air",
        D: "D. Call for a helicopter", 
        E: "E. Yell and wave your hands", 
        correct_answer: "A"
    },
    {
        question: "4. You decide to continue along the salmon stream described in #3. All of sudden you are knocked to the ground and a bear has your shoulder in its teeth and is shaking you. It’s happening so fast that you can’t tell whether the bear is black or brown. What is the immediate thing you should do?",
        A: "A. Play dead",
        B: "B. Fight back",
        C: "C. Scream",
        D: "D. Lay on your stomach with your hands behind your neck ", 
        E: "E. 'A' and 'D'", 
        correct_answer: "E"
    },
    {
        question: "5. The attack described in #4 persists for what seems like a long time. The bear is slowly and deliberately sniffing and licking you between bites. What is the next thing you should do?",
        A: "A. Play dead",
        B: "B. Fight back",
        C: "C. Scream",
        D: "D. Lay on your stomach with your hands behind your neck", 
        E: "E. 'B' and 'C'", 
        correct_answer: "E"
    },
    {
        question: "6. You are walking on open tundra. You see a brown bear about 100 yards away and it stands on its hind legs and looks at you while sniffing the air. What is the first thing you should do?",
        A: "A. Turn and walk away quickly",
        B: "B. Move to the closest high ground",
        C: "C. Yell and wave your hands",
        D: "D. Avoid eye contact with the bear", 
        E: "E. Hide behind the nearest obstacle", 
        correct_answer: "C"
    },
    {
        question: "7. The bear in #6 drops down to all four feet and begins to walk toward you, in no apparent hurry. Its ears are up and it is sniffing the air and looking at you. It has no cubs. What is the next thing you should do?",
        A: "A. Shoot into the air with your firearm",
        B: "B. Yell and wave your hands more vigorously",
        C: "C. Shoot the bear",
        D: "D. Avoid eye contact with the bear", 
        E: "E. 'B' and 'D'", 
        correct_answer: "B"
    },
    {
        question: "8. The bear in #7 has walked to within 50 feet of you. Its ears are still forward and it is looking at you. The bear takes a few quick steps toward you. What is the next thing that you should do?",
        A: "A. Take a couple of steps toward the bear",
        B: "B. Yell and wave your hands",
        C: "C. Shoot your pepper spray at the bear",
        D: "D. Drop to the ground on your stomach", 
        E: "E. 'A' or 'B'", 
        correct_answer: "E"
    },
    {
        question: "9. It’s midnight on an Alaskan summer day, and a black bear sow with cubs has been circling 30-50 feet of your base camp for the past hour. You’ve tried to shoo it off by yelling and banging pans but these have no effect. What is the next thing you should do? (More than one answer is appropriate)",
        A: "A. Shoot your pepper spray at the sow (mom)",
        B: "B. Throw rocks at the sow",
        C: "C. Shoot the bear with your firearm",
        D: "D. Chase the bears 100 feet away from camp", 
        E: "E. 'A', 'B', or 'D'", 
        correct_answer: "E"
    },
    {
        question: "10. You are hiking on the open tundra and you see a bear at a distance of 300 feet but it does not see you. What is the first thing you should do?",
        A: "A. Yell and wave your hands",
        B: "B. Shoot into the air with your firearm",
        C: "C. Move to the closest high ground",
        D: "D. Get your pepper spray ready", 
        E: "E. Change your route to avoid the bear", 
        correct_answer: "E"
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

function renderQuestion(i) {
    var questionEl = $("<p>");
    questionEl.html(questions[i].question + "<br>" + 
    "<input type='radio' name='question-" + i + "' value='A' correct-value='B'>" + questions[i].A + "<br>" + 
    "<input type='radio' name='question-" + i + "' value='B' correct-value='B'>" + questions[i].B + "<br>" +
    "<input type='radio' name='question-" + i + "' value='C' correct-value='B'>" + questions[i].C + "<br>" +
    "<input type='radio' name='question-" + i + "' value='D' correct-value='B'>" + questions[i].D + "<br>" +
    "<input type='radio' name='question-" + i + "' value='E' correct-value='B'>" + questions[i].E)
    $("#questions").append(questionEl);
}

$("#start").click(function(event) {
    $(this).css("display", "none");
    $(".questions").css("display", "block");
    start()
    renderQuestion(0)
    renderQuestion(1)
    renderQuestion(2)
    renderQuestion(3)
    renderQuestion(4)
    renderQuestion(5)
    renderQuestion(6)
    renderQuestion(7)
    renderQuestion(8)
    renderQuestion(9)
    var doneBtn = $("<button type='button' id='done' class='done'>")
    doneBtn.html("Done");
    $("#questions").append(doneBtn);
});

$(document).on("click", "#done", function(event) {
    var answers = $("input:checked");
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].attributes[3].value === "true") {
            correct++;
        } else {
            incorrect++; 
        }
    }
    console.log("correct", correct)
    console.log("incorrect", incorrect)
})