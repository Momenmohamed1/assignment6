
var char = window.prompt("Enter chart");
var value = ['a', 'e', 'i', 'o', 'u'];
if (value.includes(char.toLocaleLowerCase())) {
    console.log("the char is vowel");
} else {
    console.log("the char is Consonant");
}

