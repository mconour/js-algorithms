# Anagram Checker

This is a JavaScript program that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another.

## Solution

```javascript
/**
 * Function to check if two strings are anagrams.
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} - True if the strings are anagrams, false otherwise.
 */
const areAnagrams = (str1, str2) => {
  // Helper function to clean a string
  const cleanString = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z]/g, ''); // Remove non-alphabetic characters

  const cleanedStr1 = cleanString(str1);
  const cleanedStr2 = cleanString(str2);

  // Check if the lengths of the cleaned strings are the same
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Count the frequency of characters in both strings
  const charCount1 = {};
  const charCount2 = {};

  for (const char of cleanedStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of cleanedStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare the character frequency counts
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
};
```

## Usage

This program provides an `areAnagrams` function that takes two strings as input and returns `true` if they are anagrams, and `false` otherwise. You can use it as follows:

```javascript
const result = areAnagrams("listen", "silent");
console.log(result); // Output: true
```

## Example

```javascript
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
```

## Testing

This code includes testing using a testing framework like Mocha and Chai. The test suite checks the `areAnagrams` function with various inputs to ensure it behaves correctly.

To run the tests, use the following command:

```javascript
mocha.run();
```

Feel free to explore this Anagram Checker program and use it to determine if two strings are anagrams of each other. 
```