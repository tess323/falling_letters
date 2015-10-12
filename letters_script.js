// random letter generator
function letterGen(len)
{
    var text = " ";

    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

// call letterGen for 1 letter
function randomLetter(){
	letterGen(1);

}

// Create a span to put that letter in

// function 

$(document).ready(function(){
	randomLetter();
	
});

