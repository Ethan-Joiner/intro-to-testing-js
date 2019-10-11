// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name = "World") {
    if (typeof name === "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, " + name + "!";
    }
}