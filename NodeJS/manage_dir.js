var fs = require('fs');

// delete file

fs.exists("write1",function(exists){
    if(exists){
        console.log("file exists");
        fs.unlink('write1');
    }
    else{
        console.log("file does exists");
    }
   
});



// create dir

fs.mkdirSync('stuff');

console.log("directory created");

// remove directory

fs.rmdirSync('stuff');
console.log("directory removed");


// create directory async
/**
 * 

fs.mkdir("sample", function () {
    fs.readFile("readme.txt", "utf8", function (err, data) {
        fs.writeFile("./sample/writeme.txt", data);
    });
})

 

// remove directory

fs.unlink("./sample/writeme.txt", function () {
    fs.rmdir("sample");
});
*/