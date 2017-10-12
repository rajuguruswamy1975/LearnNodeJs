var fs = require('fs');

// async read
var readme = fs.readFileSync('readme.txt', 'utf8');

console.log(readme);

//sync write

fs.writeFileSync("writeme.txt", readme);


// asysnc read

fs.readFile("readme.txt", "utf8", function (err, data) {
    console.log(data);
    fs.writeFile('write1', data);
});

console.log('test');

// async write


