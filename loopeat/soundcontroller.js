// Here you can use your own file.
// But keep in mind that the sound should start as soon as the file is played.
// https://codepen.io/eduardopaulcs/pen/bGGLvYO?editors=0110
var audio = new Audio("samples/kick.wav");
var loopTimeout;

var bpmInput = document.getElementById("bpms");
var ball = document.getElementById("ball");

function playAudio() {
    ball.style.display = "";
    setTimeout(function () {
        ball.style.display = "none";
    }, 80);

    audio.cloneNode().play();
}

function loopAudio(ms) {
    playAudio();

    loopTimeout = setTimeout(function () {
        loopAudio(ms);
    }, ms);
}

function playBtn() {
    var bpms = parseInt(bpmInput.value);
    if (!isNaN(bpms) && bpms >= 1 && bpms <= 999) {
        stopBtn();

        var ms = 60000 / bpms;
        loopAudio(ms);
    } else {
        alert("Insert a number between 1 and 999.");
    }
}

function stopBtn() {
    clearTimeout(loopTimeout);
    document.querySelectorAll('audio').forEach(el => el.pause());
}

var lastTap = 0;
function tapBtn() {
    stopBtn();
    playAudio();

    var d = new Date();
    var t = d.getTime();
    var diff = t - lastTap;
    var estBpm = 60000 / diff;

    if (lastTap > 0 && estBpm >= 1 && estBpm <= 999) {
        bpmInput.value = Math.round(estBpm);
    }

    lastTap = t;
}
