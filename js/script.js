//text change
function textChange(){	
	document.getElementById('h2').innerHTML = "Hello There!";

}


//show date
function showDate(){	
	document.getElementById('dh2').innerHTML = Date;

}

// on & off
function bc(){
	document.getElementById('ts').src = 'img/2.png';
}
function wc(){
	document.getElementById('ts').src = 'img/1.png';
}

// variable repeat

function dataRepeat(){
	var message ="Welcome to ss";
	document.getElementById('dr').innerHTML = message.repeat(3);
}

// on & off
function bulbOn(){
	document.getElementById('bulb').src = 'img/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src = 'img/off.gif';
}


// fontsize

function fontSize(){
	document.getElementById('fs').style.fontSize = "50px";
}

// show/hide
function textShow(){
	document.getElementById('tsh').style.display ="block";

}
function textHide(){
	document.getElementById('tsh').style.display ="none";
}


function plus(){
document.getElementById("pp").innerHTML = 10 + 13;
}


function min(){
document.getElementById("pe").innerHTML = 27 - 10;
}


function outPut(){
	var number1 = 10;
	var number2 = 5;
	var result = number1 + number2;

	document.getElementById('op').innerHTML = result;
}


function outPutB(){
	var number1, number2, result;
	number1 = 156;
	number2 = 5635;
	result = number1 + number2;

	document.getElementById('sc').innerHTML = result;
}


function outPutC(){
	let number1, number2, number3, result;
	number1 = 234;
	number2 = 567;
	number3 = 891;
	result = number1 + number2 + number3;

	document.getElementById('sclet').innerHTML = result;
}



function outPutd(){
	let number1, number2, number3, result;
	number1 = 234;
	number2 = 567;
	number3 = 891;
	result = number1 + number2 / number3;

	document.getElementById('sclt').innerHTML = result;
}




function outPuted(){
	let number1, number2;
	number1 = 234;
	number2 = 567;
	number1 += number2;

	document.getElementById('scltef').innerHTML = number1;
}



function outPutede(){
	let number1, number2;
	number1 = 234;
	number2 = 567;
	number1 -= number2;

	document.getElementById('scltefg').innerHTML = number1;
}


function outPutedef(){
	let number1, number2;
	number1 = 2356;
	number2 = 567;
	number1 -= number2;

	document.getElementById('scltefgh').innerHTML = number1;
}

function outPutedefg(){
	let number1, number2;
	number1 = 2356;
	number2 = 567;
	number1 += number2;

	document.getElementById('scltefghi').innerHTML = number1;
}



function outPutedefgh(){
	let number1, number2;
	number1 = 235;
	number2 = 567;
	number1 += number2;

	document.getElementById('scltefghij').innerHTML = number1;
}


function outPutedefghi(){
	let number1, number2;
	number1 = 435;
	number2 = 569;
	number1 += number2;

	document.getElementById('scltefghijk').innerHTML = number1;
}


function test(){
	document.getElementByClassName('p')[1].innerHTML = "Welcome"
}










