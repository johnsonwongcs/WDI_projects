var randomNumbers = [];
var numOfNumbers = 20;
var sum = 0;
for (var i = 0; i <= numOfNumbers; i++) {
  randomNumbers[i] = Math.ceil(Math.random()*1000);
};
console.log(randomNumbers);
for (i = 0; i <= numOfNumbers; i++) {
  if (randomNumbers[i] % 5 == 0) {
    sum += randomNumbers[i];
    console.log(randomNumbers[i]);
  };
};
console.log(sum); 

for (i = 1; i <= numOfNumbers; i++) {
  for (var j = i; j > 0 && randomNumbers[j] < randomNumbers[j-1]; j--) {
    var temp = randomNumbers[j];
    randomNumbers[j] = randomNumbers[j-1];
    randomNumbers[j-1] = temp;
  };
};
console.log(randomNumbers);