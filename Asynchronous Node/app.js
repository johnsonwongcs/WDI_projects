var fs = require('fs');

fs.readFile('casper.txt', 'utf8', function (err, contents) {
    console.log(contents);
    console.log(contents.length);

    char = contents.charAt(0);
    count = 1;
    compressed = '';
    for (var i=1;i<contents.length;i++) {
        if ((contents.charAt(i) == char) && (count != 35)) {
            count++;
        }
        else
        {
            compressed += count.toString(36) + char;
            count = 1;
            char = contents.charAt(i);
        }
        
    }
    fs.writeFile('casper.zip',compressed);
    console.log(compressed);
    console.log(compressed.length);
    uncompressed = '';
    for (var i=0;i<compressed.length;i+=2) {
        for (var j=1;j<=parseInt(compressed[i],36);j++){
            uncompressed += compressed[i+1];
        }
    }
    console.log(uncompressed);
});
