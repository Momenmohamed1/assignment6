var num1 = parseInt(prompt("enter the number1"));
var num2 = parseInt(prompt("enter the number2"));


switch (true) {
    case num1 > num2:
        console.log("tha max value is num1");
        break;
    case num2 > num1:
        console.log("tha max value is num2");
        break;
    default:
        console.log("error");
}