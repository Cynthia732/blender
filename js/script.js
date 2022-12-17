var blenderState= "off";
var blenderJs = document.getElementById("blender");
var blenderSound = document.getElementById("blender-sound");
var blenderButton = document.getElementById("blender-button-sound");

function blenderController() {
    if (blenderState == "off") {
        blenderState = "on";
        blenderNoise();
        blenderJs.classList.add("active");
        console.log("I'm on");
    } else {
        blenderState = "off"
        blenderNoise();
        blenderJs.classList.remove("active");
        console.log("I'm off");
    }
}

function blenderNoise() {
    if (blenderSound.paused) {
        blenderButton.play();
        blenderSound.play();
    
    } else {
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}