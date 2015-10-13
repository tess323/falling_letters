// random number generator to dictate span spacing
function randomNumber(max){
	var randomNum = Math.random();
	var numToMax = randomNum * max;
	var numFloored = Math.floor(numToMax);

	return numFloored;
	console.log(numFloored);

}

// random letter generator
function letterGen(len)
{
    var text = " ";

    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
    console.log(letterGen);
}


// Create a span to put that letter in
function createSpan(){
	var span = $('<span/>');
	span.css('position','absolute');
	span.css('top',0);
	randomPercent = randomNumber(100)+'%';
	span.css('left', randomPercent);
	span.text(letterGen(1))

	span.appendTo('body');

	return span;
	console.log(span);

}

// make letters fall using animation 
function lettersFall(){
	var letterSpan = createSpan()
	letterSpan.animate({'top':'105%'}, 7000)
	letterSpan.hide( [1200] )
}
// make letters disappear when you strike the key
function removeLetter(pressedKey){
	var typedLetter = String.fromCharCode(pressedKey.keyCode);
	var letterSpan  = $("span:contains("+typedLetter+")").first();
	letterSpan.remove();
}

// keep track of score
function increaseScore(){
	$('#score').innerHTML = parseInt(score.innerHTML) + 1
}

// multiple letters
setInterval(lettersFall,1000)

// letters disappear when you hit the bottom of the screen
function removeSpan(){

}


//timer

// speed up when you get 20 correct



$(document).ready(function(){
	letterGen();
	// createSpan();
	lettersFall();
	removeLetter();
	
});

$(document).on("keyup", removeLetter);


