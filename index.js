var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var crash = new Audio('sounds/crash.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');

function audioPlay(key) {
    switch (key) {
        case "w":
            console.log("w");
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
            case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            case "k":
                var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        default:
            console.log("nope");
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        audioPlay(this.innerHTML);

        buttonAnimation(this.innerHTML);

 
    });


}

document.addEventListener("keydown", function(event){
    audioPlay(event.key);
    buttonAnimation(event.key);
});
