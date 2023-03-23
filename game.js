var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;
var gameStarted=false;

function playSound(name){
    var audio = new Audio('sounds/'+ name +'.mp3');
    audio.play();
}
function nextSequence(){
userClickedPattern=[];
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
        $("#level-title").text("Level "+ level);
    level+=1;
}





$(".btn").click(function(){
    var userChosenColour= $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    }, 100);
}

$(document).keydown(function(){
    if(gameStarted===false){
        nextSequence();
        gameStarted=true;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
}
    }

else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    setTimeout(function(){
       $("body").removeClass("game-over"), 300});
        
       
}
}

function startOver(){
    level=0;
    gamePattern=[];
    gameStarted=false;
       
}
