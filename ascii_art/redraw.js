var fs = require('fs');
var EOL = require('os').EOL;
var file_name = 'casper';
var file = fs.readFileSync(file_name+'.txtc');
	file = file.toString();

fs.openSync(file_name+'.txto', 'w');

file.split(EOL).map(function (line) {
	var chars = line.split('');
	var count = '';
	output = '';
	for(index in chars){
		if(!isNaN(parseInt(chars[index]))){
			count +=chars[index];
		}
		else{
			for(var i = 0;i < parseInt(count);i++){
				output += chars[index];
			}
			count ='';
		}
	}
	fs.appendFile(file_name+'.txto', output + EOL, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
});