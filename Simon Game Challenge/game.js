const buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];
var gamePattern = [];

var started = false;
var level = 0;

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}

$('.btn').click(function(){
    if(started){
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    }
})

$(document).on("keydown", function(){
    if(!started){
        started = true;
        $('#level-title').text("Level " + level);
        nextSequence();
    }
});

function checkAnswer(userClickedAmount){
    if(gamePattern[userClickedAmount] === userClickedPattern[userClickedAmount]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        };
    } else{
        playSound("wrong");
        $('body').toggleClass('game-over');
        setTimeout(function(){
            $('body').toggleClass('game-over');
        }, 200);
        $("#level-title").text("Game Over, press any key to restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = []
    started = false;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(color){
    $('#' + color).toggleClass('pressed');
    setTimeout(function(){
        $('#' + color).toggleClass('pressed');
    }, 150);
}

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = getRandomNumber(0, 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}