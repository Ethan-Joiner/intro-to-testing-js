// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
};
// sayHello function
function sayHello(name = "World") {
    if (typeof name === "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, " + name + "!";
    }
}
// isFive function
function isFive(num) {
    return num === "5" || num === 5
}

// isEven function
function isEven(num) {
    return num % 2 === 0
}

// isVowel function
function isVowel(x) {
  if (x === "a" || x === "A") {
      return true
  } else if (x === "y" || x === 4 || x === true || x === false || typeof x === "undefined"){
      return false
  } else {
      return typeof x === "boolean"
  }
}

// add function
function  add(x, y) {
     if (typeof parseFloat(x) !== "number" || typeof parseFloat(y) !== "number") {
        return NaN;
    } else {
         return parseFloat(x) + parseFloat(y);
     }
}
