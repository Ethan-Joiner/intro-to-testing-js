// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it("should return 'Hello, Alex!'", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it("should return 'Hello, Pat!'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello()).toBe("Hello, World!")
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return boolean no matter what", function() {
        expect(typeof isFive()).toBe("boolean")
    });
    it("should return true when passed 5", function() {
        expect(isFive(5)).toBe(true)
    });
    it("should return true when passed '5'", function() {
        expect(isFive("5")).toBe(true)
    });
});

describe("isEven", function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return boolean no matter what", function() {
        expect(typeof isEven()).toBe("boolean")
    });
    it("should return true when passed 2", function() {
        expect(isEven(2)).toBe(true)
    });
    it("should return true when passed -4", function() {
        expect(isEven(-4)).toBe(true)
    });
    it("should return false when passed 3", function() {
        expect(isEven(3)).toBe(false)
    });
    it("should return false when passed 'banana'", function() {
        expect(isEven("banana")).toBe(false)
    });
});
describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return boolean no matter what", function() {
        expect(typeof isVowel()).toBe("boolean")
    });
    it("should return true if passed 'a'", function() {
        expect(isVowel("a")).toBe(true)
    });
    it("should return true if passed 'A'", function() {
        expect(isVowel("A")).toBe(true)
    });
    it("should return false if passed 'y'", function() {
        expect(isVowel("y")).toBe(false)
    });
    it("should return false if passed 4", function() {
        expect(isVowel(4)).toBe(false)
    });
    it("should return false if passed true", function() {
        expect(isVowel(true)).toBe(false)
    });
    it("should return false if passed false", function() {
        expect(isVowel(false)).toBe(false)
    });
    it("should return false if passed 'banana'", function() {
        expect(isVowel("banana")).toBe(false)
    });
    it("should return false if passed '()'", function() {
        expect(isVowel("()")).toBe(false)
    });
});
describe("add", function() {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("should be a defined function", function() {
        expect(typeof add).toBe("function");
    });
    it("should return 5 when passed 2, 3", function() {
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12 when passed -3, -9", function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return 11 when passed '5', 6", function() {
        expect(add("5", 6)).toBe(11);
    });
    it("should return 6 when passed '-4', '10'", function() {
        expect(add("-4", '10')).toBe(6);
    });
    it("should return NaN when passed 'banana', 'split'", function() {
        expect(add("banana", 'split')).toBeNaN();
    });
});