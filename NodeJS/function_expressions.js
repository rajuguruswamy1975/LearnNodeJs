//normal function

function sayHi() {
    console.log("hi");
}

sayHi();

// function expression

var sayBye = function () {
    console.log("bye");
};

sayBye();

// call function

function callFunction(fun) {
    fun();
}

callFunction(sayBye);
callFunction(sayHi);
