// Exercise 1

//Looping a triangle
var counter;
var string = "";
for (counter = 1; counter <= 7; counter++) {
	string = string + "#";
	console.log(string);
};

//FizzBuzz
for (counter = 1; counter <= 100; counter++) {
	if (counter % 3 == 0 && counter % 5 == 0) {
		console.log("FizzBuzz");
	} else if (counter % 3 == 0) {
		console.log("Fizz");
	} else if (counter % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(counter);
	}
};

//Chess board
var toggle;
var string;
var size = prompt("What size is the chess board?");
for (counter = 1; counter <= size; counter++) {
	string = "";
	if (counter % 2 == 0) {
		toggle = 0;
	} else {
		toggle = 1;
	};
	for (counter1 = 1; counter1 <= size; counter1++) {
		if ((counter1 + toggle) % 2 == 0) {
			string = string + " ";
		} else {
			string = string + "#";
		};
	};
	console.log(string);
};

//Exercise 2
var string = "1";
var number = prompt("What is the number?");
if (number == 0) {
	console.log("0");
} else if (number == 1) {
	console.log("1");
} else {
	for (counter = 2; counter <= number; counter++){
		for (counter1 = 1; counter1 <= counter; counter1++) {
			string = string + ", " + counter;
		};
	};
	console.log(string);
};

//Exercise 3
var toggle = true;
var number = prompt("What is the number?");
for (counter = 1; counter <= number; counter++) {
	string = "";
	toggle = true;
	for (counter1 = 1; counter1 <= (counter * 2) - 1; counter1++) {
		if (toggle == true) {
			string = string + counter;
			toggle = !toggle;
		} else {
			string = string + " ";
			toggle = !toggle;
		};
	};
	for (counter1 = 1; counter1 <= (number - counter); counter1++) {
		string = " " + string + " ";
	}
	console.log(string);
};






