var module_pattern = require('./module_patterns');



console.log('hello raju');

console.log("Directory name  ", __dirname);

console.log("File Name  ", __filename);

//Global obect
setTimeout(function () {
    console.log('Three seconds has passed');
}, 3000);


/**
 * 

// setInterval
time=0;
setInterval(function(){
    time +=2;
    console.log(time + 'seconds passed');

},100);
 */

// clear interval
time = 0;
timer = setInterval(function () {
    time += 2;
    console.log(time + 'seconds passed');

    if (time > 5) {
        clearInterval(timer);
    }

}, 10);

// module pattern
console.log(module_pattern.counter(['one', 'two', 'three']));
console.log(module_pattern.adder(1, 2));
console.log(module_pattern.pi);

console.log(module_pattern.sub(5, 2));
console.log(module_pattern.mul(5, 2));
