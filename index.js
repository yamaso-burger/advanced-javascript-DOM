var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var crash = new Audio('sounds/crash.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        tom1.play();

        // What to do when click detected
    });
}