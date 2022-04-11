
// function that returns 0 in the input field after pressing the button '0'
function but0() {
    document.getElementById("operation").value = document.getElementById("operation").value + 0;
}
// function that returns 1 in the input field after pressing the button '1'
function but1() {
    document.getElementById("operation").value = document.getElementById("operation").value + 1;
}
// function that returns 2 in the input field after pressing the button '2'
function but2() {
    document.getElementById("operation").value = document.getElementById("operation").value + 2;
}
// function that returns 3 in the input field after pressing the button '3'
function but3() {
    document.getElementById("operation").value = document.getElementById("operation").value + 3;
}
// function that returns 4 in the input field after pressing the button '4'
function but4() {
    document.getElementById("operation").value = document.getElementById("operation").value + 4;
}
// function that returns 5 in the input field after pressing the button '5'
function but5() {
    document.getElementById("operation").value = document.getElementById("operation").value + 5;
}
// function that returns 6 in the input field after pressing the button '6'
function but6() {
    document.getElementById("operation").value = document.getElementById("operation").value + 6;
}
// function that returns 7 in the input field after pressing the button '7'
function but7() {
    document.getElementById("operation").value = document.getElementById("operation").value + 7;
}
// function that returns 8 in the input field after pressing the button '8'
function but8() {
    document.getElementById("operation").value = document.getElementById("operation").value + 8;
}
// function that returns 9 in the input field after pressing the button '9'
function but9() {
    document.getElementById("operation").value = document.getElementById("operation").value + 9;
}
// function that returns + in the input field after pressing the button '+'
function add() {
    document.getElementById("operation").value = document.getElementById("operation").value + "+";
}
// function that returns - in the input field after pressing the button '-'
function subt() {
    document.getElementById("operation").value = document.getElementById("operation").value + "-";
}
// function that returns * in the input field after pressing the button '*'
function mult() {
    document.getElementById("operation").value = document.getElementById("operation").value + "*";
}
// function that returns / in the input field after pressing the button '/'
function dev() {
    document.getElementById("operation").value = document.getElementById("operation").value + "/";
}
// function that returns , in the input field after pressing the button ','
function sep() {
    document.getElementById("operation").value = document.getElementById("operation").value + ",";
}
// function that cleans the input field after pressing the button 'AC'
function del() {
    document.getElementById("operation").value = "";
}
/* function that performs calculations according to the expression in the input field,
it returns Error for deviding zero by zero */
function calc() {
   let value = document.getElementById("operation").value;
   if (value.includes("0/0")) {
    document.getElementById("operation").value = "Error";
   } else {
    value = value.replace(/,/g, ".");
    let result = eval(value);
    let text = result.toString();
    text = text.replace(".", ",");
    document.getElementById("operation").value = text;
   }
}
