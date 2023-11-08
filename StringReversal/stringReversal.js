// Solution 1
/* const strReversal = str => str.split("").reverse().join(""); */


// Solution 2
/* const strReversal = str => {
	let result = "";
	for (let character of str) result = character + result;
	return result;
} */


// Solution 3
const strReversal = str => str.split("").reduce((result, character) => character + result);


mocha.setup("bdd");
const {
	assert
} = chai;

describe("String Reversal", () => {
	it("Should reverse string", () => {
		assert.equal(strReversal("Hello World!"), "!dlroW olleH");
		assert.equal(strReversal("Hello World!"), "!dlroW olleH");
		assert.equal(strReversal("Hello World!"), "!dlroW olleH");
	});
});

mocha.run();