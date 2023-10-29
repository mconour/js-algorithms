# Fizz Buzz

This is a JavaScript implementation of the classic "Fizz Buzz" problem, commonly used in programming interviews to test basic coding skills. The problem involves printing numbers from 1 to a specified number, with some variations:

- If a number is divisible by 2, it prints "Fizz."
- If a number is divisible by 3, it prints "Buzz."
- If a number is divisible by both 2 and 3, it prints "Fizz Buzz."
- Otherwise, it prints the number itself.

## Usage

You can use this JavaScript function to generate the Fizz Buzz sequence for a given range of numbers. The `fizzBuzz` function takes one argument, `number`, which is the upper limit of the range.

```javascript
const fizzBuzz = number => {
  let output = [];
  for (let i = 1; i <= number; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};
```

To run the provided test cases, you can use the [Mocha](https://mochajs.org/) testing framework. Make sure you have Mocha and the [Chai](https://www.chaijs.com/) assertion library installed. Then, you can execute the tests as follows:

```javascript
mocha.setup("bdd");
const { assert } = chai;
let output;

describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));

  it("Should output number", () => {
    assert.equal(output[0], 1);
  });

  it("Should output Fizz", () => {
    assert.equal(output[1], "Fizz");
  });

  it("Should output Buzz", () => {
    assert.equal(output[2], "Buzz");
  });

  it("Should output Fizz Buzz", () => {
    assert.equal(output[5], "Fizz Buzz");
  });
});

mocha.run();
```

Feel free to adjust the `fizzBuzz` function or create additional test cases to suit your specific needs. This code serves as a simple example of how to approach the Fizz Buzz problem in JavaScript.