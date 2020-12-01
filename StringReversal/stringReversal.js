/*
String Reversal:
-----------
Given a string of characters as input, write a function that returns it with the characters reversed.
*/

const strReversal = str => str.split("").reverse().join("");

const _strReversal = str => {
    let result = "";
    for (let character of str) result = character + result;
    return result;
}

const __strReversal = str => str.split("").reduce((result, character) => character + result);
    

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
	it("Should reverse string", () => {
		assert.equal(strReversal("Hello World!"), "!dlroW olleH");
		assert.equal(_strReversal("Hello World!"), "!dlroW olleH");
		assert.equal(__strReversal("Hello World!"), "!dlroW olleH");
	});
});

mocha.run();
