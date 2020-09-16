var display = document.getElementById("calc-display");
display.value = "0";
var b7 = document.getElementById("seven");
b7.onclick = function() {
	document.getElementById("calc-display").value += "7";
};
var b8 = document.getElementById("eight");
b8.onclick = function() {
	document.getElementById("calc-display").value += "8";
};
var b9 = document.getElementById("nine");
b9.onclick = function() {
	document.getElementById("calc-display").value += "9";
};
var bDivide = document.getElementById("divide");
bDivide.onclick = function() {
	document.getElementById("calc-display").value += "%";
};
var b4 = document.getElementById("four");
b4.onclick = function() {
	document.getElementById("calc-display").value += "4";
};
var b5 = document.getElementById("five");
b5.onclick = function() {
	document.getElementById("calc-display").value += "5";
};
var b6 = document.getElementById("six");
b6.onclick = function() {
	document.getElementById("calc-display").value += "6";
};
var bMult = document.getElementById("mult");
bMult.onclick = function() {
	document.getElementById("calc-display").value += "X";
};
var b1 = document.getElementById("one");
b1.onclick = function() {
	document.getElementById("calc-display").value += "1";
};
var b2 = document.getElementById("two");
b2.onclick = function() {
	document.getElementById("calc-display").value += "2";
};
var b3 = document.getElementById("three");
b3.onclick = function() {
	document.getElementById("calc-display").value += "3";
};
var bMinus = document.getElementById("minus");
bMinus.onclick = function() {
	document.getElementById("calc-display").value += "-";
};
var bZero = document.getElementById("zero");
bZero.onclick = function() {
	document.getElementById("calc-display").value += "0";
};
var bClear = document.getElementById("clear");
bClear.onclick = function() {
	document.getElementById("calc-display").value = "0";
};
/*
var bEquals = document.getElementById("equals");
bEquals.onclick = function() {
	document.getElementById("calc-display").value = eval(bEquals.value);
};
*/
var bAdd = document.getElementById("add");
bAdd.onclick = function() {
	document.getElementById("calc-display").value += "+";
};