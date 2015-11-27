var isNum = true;
var isZero = false;
for (var i=3;i<process.argv.length;i++) {
	if (isNaN(parseInt(process.argv[i]))){
		isNum = false;
	}
	if (parseInt(process.argv[i]) == 0) {
		isZero = true;
	}
};

if (isNum == false) {
	console.log("Error! Not all inputs are numbers!")
}
else {
	var answer = parseInt(process.argv[3]);
	if (process.argv[2] == 'add'){
		for (var i=4;i<process.argv.length;i++) {
			answer += parseInt(process.argv[i]);
		};
	}
	else if (process.argv[2] == 'subtract') {
		for (var i=4;i<process.argv.length;i++) {
			answer -= process.argv[i];
		}
	}
	else if (process.argv[2] == 'multiply') {
		for (var i=4;i<process.argv.length;i++) {
			answer = answer * process.argv[i];
		}
	}
	else if (process.argv[2] == 'divide') {
		if (isZero == true){
			answer = "Cannot divide with zero!";
		}
		else {
			for (var i=4;i<process.argv.length;i++) {
				answer = answer/process.argv[i];
			}
		}
	}
	else {
		answer = "Invalid operator input!";
	}
	console.log(answer);
}