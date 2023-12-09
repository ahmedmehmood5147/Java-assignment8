var charcode = prompt("check the weather")
if (charcode>=48 && charcode<=57){
    alert("A")
}
else if (charcode>=65 && charcode <= 90){
    alert("a")
}
else if (charcode>=97 && charcode <= 122){
    alert("z")
}
//answer 2
var number = prompt ("Enter a number")
if (number == 0){
    console.log ("Negative")
}
else if (number == 1){
    console.log ("Positive")
}
else {
    console.log("Zero");
}
var userName = prompt ("Enter a vowel")
if (userName === "a" || userName === "e"|| userName==="i" || userName === "o"|| userName=== "u"){
    console.log (true)
}
else {
    console.log(false);
}
//answer 3
var correctPassword = "ahmed123"
var userName = prompt ("Enter your password")
if (correctPassword == userName){
    console.log ("correct password")
}
else {
    console.log("incorrect password");
}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
var time = prompt ("Enter a time")
if (time > 0 && time < 1200){
    console.log("Good morning");
}
else if (time >= 1200 && time < 1700){
    console.log("Good afternoon");
}
else if (time >= 1700 && time < 2100){
    console.log("Good evening");
}
else if (time >= 2100 && time < 2359){
    console.log("Good night");
}
else {
    "please enter time 0 between 2400"
}