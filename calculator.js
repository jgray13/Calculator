// fix long input for display (use toFixed)

var display = document.getElementById("calc-display");
function setDisplay() {
	display.value = "0";
}
var firstNum;
var secondNum;
var operator;
var answer;
var displayVal = display.value;
var displayArr = [];

function calculateAnswer() {
		switch(operator) {
		case String.fromCharCode(247):
		answer = firstNum / secondNum;
		break;
		case String.fromCharCode(215):
		answer = firstNum * secondNum;
		break;
		case "-":
		answer = firstNum - secondNum;
		break;
		case "+":
		answer = firstNum + secondNum;
		break;
		default:
		answer = 0;
	}
}
var bAdd = document.getElementById("add");
bAdd.onclick = function() {
	if (firstNum && secondNum) {
	    display.value = answer;
	}
	if (operator === undefined) {
	    display.value += "+";
	    displayVal = display.value;
	    operator = "+";
	}
	if (answer === undefined) {
	    firstNum = displayArr.join("");
	    firstNum = Number(firstNum);
	} else {
		firstNum = answer;
	}
	displayArr = [];
	if (firstNum && secondNum || secondNum === 0) {
	  //displayVal = display.value;
	  //calculateAnswer();
	    display.value = answer;
	    displayVal = display.value;
	    operator = "+";
		display.value += "+";
	    displayVal = display.value;
	    display.value = answer;
	    display.value += "+";
	    calculateAnswer();
	}
};
var bMinus = document.getElementById("minus");
bMinus.onclick = function() {
	if (firstNum && secondNum) {
		display.value = answer;
	}
	if (operator === undefined) {
	    display.value += "-";
	    displayVal = display.value;
	    operator = "-";
    }
    if (answer === undefined) {
	    firstNum = displayArr.join("");
	    firstNum = Number(firstNum);
	} else {
		firstNum = answer;
	}
	displayArr = [];
	if (firstNum && secondNum) {
	  //displayVal = display.value;
	  //calculateAnswer();
	    display.value = answer;
	    displayVal = display.value;
	    operator = "-";
		display.value += "-";
	    displayVal = display.value;
	    display.value = answer;
	    display.value += "-";
	    calculateAnswer();
	}
};
var bMult = document.getElementById("mult"); // String.fromCharCode(215) multipliaction symbol
bMult.onclick = function() {
	if (firstNum && secondNum) {
	    display.value = answer;
	}
	if (operator === undefined) {
	    display.value += String.fromCharCode(215);
	    displayVal = display.value;
	    operator = String.fromCharCode(215);
	}
	if (answer === undefined) {
	    firstNum = displayArr.join("");
	    firstNum = Number(firstNum);
	} else {
		firstNum = answer;
	}
	displayArr = [];
	if (firstNum && secondNum) {
	  //displayVal = display.value;
	  //calculateAnswer();
	    display.value = answer;
	    displayVal = display.value;
	    operator = String.fromCharCode(215);
		display.value += String.fromCharCode(215);
	    displayVal = display.value;
	    display.value = answer;
	    display.value += String.fromCharCode(215);
	    calculateAnswer();
	}
};
var bDivide = document.getElementById("divide"); // String.fromCharCode(247) division symbol
bDivide.onclick = function() {
	if (firstNum && secondNum) {
		display.value = answer;
	}
    if (operator === undefined) {
	    display.value += String.fromCharCode(247);
	    displayVal = display.value;
	    operator = String.fromCharCode(247);
	}
    if (answer === undefined) {
	    firstNum = displayArr.join("");
	    firstNum = Number(firstNum);
	} else {
		firstNum = answer;
	}
	displayArr = [];
	if (firstNum && secondNum) {
	    display.value = answer;
	    displayVal = display.value;
	    operator = String.fromCharCode(247);
		display.value += String.fromCharCode(247);
	    displayVal = display.value;
	    display.value = answer;
	    display.value += String.fromCharCode(247);
	    calculateAnswer();
	}
};
var bClear = document.getElementById("clear");
bClear.onclick = function() {
	display.value = "0";
	displayArr = [];
	operator = undefined;
	firstNum = undefined;
	secondNum = undefined;
	answer = undefined;
};
var bEquals = document.getElementById("equals");
bEquals.onclick = function() {
	displayVal = display.value;
	if (secondNum === undefined || secondNum === 0) {
	secondNum = displayArr.join("");
	secondNum = Number(secondNum);
	}
	calculateAnswer();
	display.value = answer;
	displayVal = display.value;
	displayArr = [answer];
	firstNum = answer;
	operator = undefined;
	secondNum = undefined;
};
var b1 = document.getElementById("one");
b1.addEventListener("click", function() {
	display.value += "1";
	displayVal = display.value;
	displayArr.push("1");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b2 = document.getElementById("two");
b2.addEventListener("click", function() {
	display.value += "2";
	displayVal = display.value;
	displayArr.push("2");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b3 = document.getElementById("three");
b3.addEventListener("click", function() {
	display.value += "3";
	displayVal = display.value;
	displayArr.push("3");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b4 = document.getElementById("four");
b4.addEventListener("click", function() {
	display.value += "4";
	displayVal = display.value;
	displayArr.push("4");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b5 = document.getElementById("five");
b5.addEventListener("click", function() {
	display.value += "5";
	displayVal = display.value;
	displayArr.push("5");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b6 = document.getElementById("six");
b6.addEventListener("click", function() {
	display.value += "6";
	displayVal = display.value;
	displayArr.push("6");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b7 = document.getElementById("seven");
b7.addEventListener("click", function() {
	display.value += "7";
	displayVal = display.value;
	displayArr.push("7");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b8 = document.getElementById("eight");
b8.addEventListener("click", function() {
	display.value += "8";
	displayVal = display.value;
	displayArr.push("8");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var b9 = document.getElementById("nine");
b9.addEventListener("click", function() {
	display.value += "9";
	displayVal = display.value;
	displayArr.push("9");
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
	if (displayVal.includes("0.") || firstNum === 0) {
		return;
	} else {
	    display.value = displayVal.replace(/^0+/, ''); //remove leading zero
	}
});
var bZero = document.getElementById("zero");
bZero.onclick = function() {
	if (display.value === "0") {
		displayArr.push("0");
	} else {
		display.value += "0";
		displayArr.push("0");
		displayVal = display.value;
	}
	if (firstNum) {
		secondNum = displayArr.join('');
		secondNum = Number(secondNum);
		calculateAnswer();
	}
};
var bPoint = document.getElementById("point");
bPoint.onclick = function() {
	if (display.value === "0") {
	    display.value += "."
	    displayArr.push(".");
	    displayVal = display.value;
	}
	if (!displayArr.includes(".")) {
		if (displayArr.length == 0) {
			display.value += "0.";
		    displayArr.push("0.");
	        displayVal = display.value;
		} else {
	        display.value += "."
	        displayArr.push(".");
	        displayVal = display.value;
	    }
	}
}

//long input...
//display.focus();
//display.setSelectionRange(display.value.length, display.value.length);
//display.scrollLeft = display.scrollWidth;
	/* toFixed for long decimals
	console.log(answer);
	answer = answer.toString();
	console.log(answer);
	if (!answer.includes(".")) {
		return;
	} else {
	var decimals = answer.split(".");
	console.log(decimals);
	}
	if (decimals[1].length > 10) {
		answer = Number.parseFloat(answer).toFixed(4);
	}
	answer = Number(answer);
	console.log(answer);
*/