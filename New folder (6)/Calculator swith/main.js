var num1 = parseInt(window.prompt("enter the number1"));
var operation = window.prompt("enter the operation")
var num2 = parseInt(window.prompt("enter the number2"));


switch (operation) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    default:
        console.log("error");
}




