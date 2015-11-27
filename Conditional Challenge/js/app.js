var number_of_conditions = 8;

function show_answer(option){
 
	var answer;

	if (option == 1) {
		answer = "Most likely";
	} else if (option == 2) {
		answer = "Reply hazy ask again";
	} else if (option == 3) {
		answer = "Concentrate and ask again";
	} else if (option == 4) {
		answer = "My sources say no";
	} else if (option == 5) {
		answer = "Ask again later";
	} else if (option == 6) {
		answer = "As I see it, yes";
	} else if (option == 7){
		answer = "It is decidedly so";
	} else {
		answer = "Cannot predict now";
	};

	// write conditions here


	display_answer(answer);
}