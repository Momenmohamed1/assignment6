var physics = parseInt(prompt("Enter marks in Physics: "));
var chemistry = parseInt(prompt("Enter marks in Chemistry: "));
var biology = parseInt(prompt("Enter marks in Biology: "));
var mathematics = parseInt(prompt("Enter marks in Mathematics: "));
var computer = parseInt(prompt("Enter marks in Computer: "));
var mark; 
function getmark(physics, chemistry, biology, mathematics, computer) {
    var totalmark = physics + chemistry + biology + mathematics + computer;
    var percentage = (totalmark / 500) * 100;
    console.log("the percentage is :" + percentage + "%");
    mark = percentage; 
    return percentage;
}

function assignGrade(mark) {
    if (mark >= 90) {
        return 'A';
    } else if (mark >= 80) {
        return 'B';
    } else if (mark >= 70) {
        return 'C';
    } else if (mark >= 60) {
        return 'D';
    } else if (mark >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}
getmark(physics, chemistry, biology, mathematics, computer)
var assignGradeif = assignGrade(mark);
console.log("grad is : " + assignGradeif);

