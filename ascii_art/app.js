var fs = require('fs');
var EOL = require('os').EOL;
var file_name = 'casper';
var file = fs.readFileSync(file_name+'.txt');
var output = '';
file = file.toString()

fs.openSync(file_name+'.txtc', 'w');

file.split(EOL).map(function (line) {
	var letter = line[0],
		count = 1;

	line.split('').map(function(val){
		if(letter != val){
			output += count+letter;
			count = 1;
			letter = val;
		}
		else{
			count++;
		}
		
	});
	output += count+letter+EOL;
});

fs.writeFile(file_name+'.txtc', output, function(err) {
    if(err) {
        return console.log(err);
    }
}); 




