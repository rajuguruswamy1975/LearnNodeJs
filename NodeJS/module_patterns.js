var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in the array';
};

var adder = function (a, b) {
    return `The sum of 2 numbers is ${a + b}`;
};

var pi = 3.142;

var mul = function (a, b) {
    return `multiplecation of two numbers : ${a, b}`;
};

sub = function (a, b) {
    return `subraction of a - b = ${a - b}`;
}

//module.exports.counter = counter;
//module.exports.adder=adder;
//module.exports.pi=pi;

module.exports = {
    mul: mul,
    counter: counter,
    adder: adder,
    pi: pi,
    sub: sub
};