var a = 4, b = 5;

function addBinary(a,b){
  var sum = a + b;
  var bin = "";
  var remainder = 1;
  while (sum > 1) {
    bin = (sum % 2) + bin;
    if (sum % 2 == 1) {
      sum = (sum - remainder)/2;
    }
    remainder = remainder * 2;
    console.log("sum = " + sum);
    console.log("bin = " + bin);
  }
  return bin;
};
addBinary(4,5);
