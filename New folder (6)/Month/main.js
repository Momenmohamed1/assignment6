var num = window.parseInt(prompt("enter number"));
if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12){
    console.log("31 days");
}
else if(num == 4 || num == 6 || num == 9 || num == 11){
    console.log("30 days");
}
else if(num ==2){
    console.log("28 days");
}
else{
    console.log("error");
}