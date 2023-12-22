# Integer Reversal

This is a JavaScript program that reverses an integer. Reversing an integer means converting it into its reversed form.

## Solution

```javascript
const reverseInteger = (num) => {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return Math.sign(num) * reversed;
};
```

## Usage

This program provides a `reverseInteger` function that takes an integer as input and returns its reversed form. You can use it as follows:

```javascript
const reversed = reverseInteger(12345);
console.log(reversed); // Output: 54321
```

## Example

```javascript
console.log(reverseInteger(12345)); // Output: 54321
console.log(reverseInteger(-9876)); // Output: -6789
```

## Testing

This code includes testing using a testing framework like Mocha and Chai. The test suite checks the `reverseInteger` function with various inputs to ensure it behaves correctly.

To run the tests, use the following command:

```javascript
mocha.run();
```