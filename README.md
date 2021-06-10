# Calculator
An online calculator made with HTML, CSS and JavaScript.

The aim was to develop a calculator app using my own technique. The process I used is described below:

&bull; Initialize the calculator display as zero using the onload event on the html body tag

&bull; Declare the variables needed for the application

&bull; Calculate the answer of sums using a switch statment

&bull; Seperate functions to deal with addition, subtraction, multiplication and division: if the user has entered a number, an operator, another number, then another operator - display the answer to the first sum with the second operator ready for another sum, if the operator is undefined - add the operator input to the display and assign to the operator variable, if the answer is undefined - assign the first number from the input (the input before the operator)

&bull; The clear button: set display to zero, reset variables to undefined

&bull; The equals button: calculate and display the answer, prepare for further sums by assigning the answer to the first number variable, reset the operator and second number variables to undefined

&bull; The number buttons: add the number to the display, if the first number and operator variables are set - assign the input to the second number variable, remove the leading zero from the display

&bull; The decimal button: if the previous input or display is zero add a decimal to display, if decimal is the first input add zero and decimal to display, if a number is input before decimal add decimal to display
