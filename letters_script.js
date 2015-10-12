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
	var newSpan = $('<span/>');
	newSpan.css('position','absolute');
	newSpan.css('top',0);
	randomPercent = randomNumber(100)+'%';
	newSpan.css('left', randomPercent);
	newSpan.text(letterGen(1))

	newSpan.appendTo('body');

	return newSpan;
	console.log(newSpan);

}

// make letters fall using animation 
function lettersFall(){
	var letterSpan = createSpan()
	letterSpan.animate({'top':'95%'}, 5000)
}
// make letters disappear when you strike the key

// function 

$(document).ready(function(){
	letterGen();
	// createSpan();
	lettersFall();
	
});

