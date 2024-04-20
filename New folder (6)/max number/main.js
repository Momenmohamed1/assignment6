

var num1 = parseInt(prompt("Enter the first integer: "));
var num2 = parseInt(prompt("Enter the second integer: "));
var num3 = parseInt(prompt("Enter the third integer: "));
function findMaxMin(num1, num2, num3) {
    var maxNum = Math.max(num1, num2, num3);
    var minNum = Math.min(num1, num2, num3);
    console.log("the max num is : "  ,maxNum);
    console.log("the min num is : "  ,minNum);
}

findMaxMin(num1,num2,num3);