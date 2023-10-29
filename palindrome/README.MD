# Palindrome

This is a JavaScript program that checks whether a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards when ignoring spaces, punctuation, and capitalization. 

## Solution 1

```javascript
const isPalindrome = str => {
    const cleaned = str.replace(/\W/g, "").toLowerCase();
    return (cleaned === cleaned.split("").reverse().join(""));
}
```

## Solution 2

```javascript
const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = string
        .toLowerCase()
        .split("")
        .reduce(
            (characters, character) =>
                validCharacters.indexOf(character) > -1
                    ? characters.concat(character)
                    : characters,
            []
        );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
};
```

## Usage

This program can be used to determine if a string is a palindrome or not. You can call the `isPalindrome` function with the string you want to check, and it will return `true` if it's a palindrome and `false` if it's not.

## Example

```javascript
console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic")); // true
console.log(isPalindrome("sit ad est love")); // false
```

## Testing

This code includes testing using Mocha and Chai. The test suite checks the `isPalindrome` function with various inputs to ensure it behaves correctly.

To run the tests, use the following command:

```javascript
mocha.run();
```