// Exercise 1
var name;
name = "Johnson";
greeting = "Hello " + name;
alert("greeting");

//Exercise 2
var x = 1125;
var answer = x % 2;
console.log(answer);

//Exercise 3
var a = true, b = false, c = true;
console.log(a || b || c);

//Exercise 4
console.log(a && b && c);

//Exercise 5
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1);
console.log(answer2);
//The reason the two answers are different is because the subtraction is performed before the addition in answer1, whereas it is performed after the addition in answer2.

//Exercise 6
var y = 12;
y = String(y);
console.log(typeof y);

y = "123";
y = parseInt(y);
console.log(typeof y);

y = "1.12356";
y = parseFloat(y);
console.log(typeof y);

y = "Hello World";
y = parseInt(y);
console.log(typeof y);
console.log(y);

//Diving deeper
var str = "I am a BrainStation student";
console.log(str.search("BrainStation"));
console.log(str.search("I am a student"));

var str = "I am a BrainStation student";
console.log(str.replace("BrainStation student", "Junior Developer"));
