var primecheck = require('primecheck');

if (primecheck(process.argv[2])) {
	console.log(process.argv[2]+" is a prime number.");
}
else {
	console.log(process.argv[2]+" is not a prime number.");
}