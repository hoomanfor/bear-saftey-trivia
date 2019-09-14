 
var timer = 5;
var intervalId;

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

$("#start").click(function(event) {
    $(this).css("display", "none");
    $("#questions").css("display", "block");
    start()
});

$("#done").click(function(event) {
    console.log($("input:checked").length)
})
