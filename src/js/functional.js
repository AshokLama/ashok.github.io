/* sum of the arr*/
function sum(arr) {
    return arr.reduce((x, y) => x + y, 0);
}

/*multiplication of the arr*/
function mul(arr) {
    return arr.reduce((x, y) => x * y, 1);
}

/* string reverse*/
function reverseString(str) {
    return str.split("").reverse().reduce((ch1, ch2) => {
        return ch1 + ch2;
    });
}


/*finding long words than given length*/
function filterLongWords(arr, i) {
    return arr.filter((str) => {
        return str.length > i;
    });
}


window.onload = () => {

    // initialize mocha
    mocha.setup('bdd');
    let assert = chai.assert;

    describe("Sum", function () {
        it("takes an array of numbers, and returns the sum of all the numbers",
            function () {
                assert.equal(10, sum([1, 2, 3, 4]));
            });
    });

    describe("Multiply", function () {
        it("takes an array of numbers, and returns the product of all the numbers",
            function () {
                assert.equal(24, mul([1, 2, 3, 4]));
            });
    });

    describe("ReverseAString", function () {
        it("takes a string, and returns the reverse of it",
            function () {
                assert.equal("kohsa", reverseString("ashok"));
            });
    });

    describe("FilterLongWords", function () {
        it("takes array of string, and a filter number, and returns words that length are greater than the input",
            function () {
                assert.equal(["Ashok", "RamKumar"].toString(), filterLongWords(["Ashok", "Max", "RamKumar"], 4).toString());
            });
    });

    mocha.run();

};