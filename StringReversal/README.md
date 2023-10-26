# String Reversal Solutions

This repo provides three different solutions to reverse a string in JavaScript.

## Solutions

### Solution 1

```javascript
const strReversal = str => str.split("").reverse().join("");
```

This solution uses the `split`, `reverse`, and `join` methods to reverse the input string.

### Solution 2

```javascript
const strReversal = str => {
	let result = "";
	for (let character of str) result = character + result;
	return result;
}
```

Solution 2 reverses the string by iterating through its characters and building the result string in reverse order.

### Solution 3

```javascript
const strReversal = str => str.split("").reduce((result, character) => character + result);
```

In Solution 3, the `reduce` method is used to reverse the string by accumulating characters in reverse order.

## Running Tests

We use Mocha and Chai for testing the string reversal functions. To run the tests, make sure you have Mocha and Chai installed, and execute the following:

```bash
npm install # Install dependencies
npm test # Run the tests
```

## Test Cases

The test cases ensure that the string reversal functions work correctly:

```javascript
describe("String Reversal", () => {
	it("Should reverse the string", () => {
		assert.equal(strReversal("Hello World!"), "!dlroW olleH");
		assert.equal(strReversal("Test123"), "321tseT");
		assert.equal(strReversal("OpenAI"), "IAepnO");
	});
});
```

Feel free to choose any of these solutions based on your preference or requirements.