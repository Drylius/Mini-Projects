for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        // alert(this.innerHTML)
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(e){
    const pressedKey = e.key;
    makeSound(pressedKey);
    addAnimation(pressedKey);
})

function addAnimation(key){
    document.querySelector('.' + key).classList.toggle('pressed')
    setTimeout(() => {
        document.querySelector('.' + key).classList.toggle('pressed')
    }, 100);
}

function makeSound(key){
    switch (key){
        case 'a':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'f':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}