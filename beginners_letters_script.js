// random number generator to dictate span spacing
var count = 0;



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
	letterSpan.animate({'top':'105%'}, 9000)
	letterSpan.hide( [1200] )
	}

// 
// make letters disappear when you strike the key
function removeLetter(pressedKey){
	var typedLetter = String.fromCharCode(pressedKey.keyCode);
	var letterSpan  = $("span:contains("+typedLetter+")").first();
	console.log(letterSpan.html());
	letterSpan.remove();
	console.log(letterSpan)
	if (!!letterSpan.html()){
		count++;
		$('.score').html(count);
		console.log('hey');
	}
	
// change score color
		if (count<=5){
		$('.well').css('color', '#006600')
			}
	else if (count<=10){
		$('.well').css('color', '#009933')
			}
	else if (count<=15) {
		$('.well').css('color', '#FFCC00')
		}
	else if (count<=20) {
		$('.well').css('color', '#FF9900')
		}	
	else if (count<=30) {
		$('.well').css('color', '#CC7A00')
		}
	else if (count<=40){
		$('.well').css('color','#CC3300')
		}
	else if (count<=45){
		$('.well').css('color','#993300')
		}
	else if (count<=50){
		$('.well').css('color','#990000')
		}
	else if (count<=55){
		$('.well').css('color','#800000')
		}
}


// multiple letters
var intervalId = setInterval(lettersFall, 1200);

// end game

var timeoutId = setTimeout(function(){
		clearInterval(intervalId);
		swal({
			title: "Congrats!",
			text:" You caught " + count + " letters",
			confirmButtonText:"Play again!"});
		location.reload();
	}, 10000);


// play the game
$(document).ready(function(){
	letterGen();
	lettersFall();
});

$(document).on("keyup", removeLetter);


