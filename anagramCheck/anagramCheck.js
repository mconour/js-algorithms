// Solution 1

/**
 * Function to check if two strings are anagrams.
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} - True if the strings are anagrams, false otherwise.
 */

/* const areAnagrams = (str1, str2) => {
    // Helper function to clean and sort a string
    const cleanAndSort = (str) =>
      str
        .toLowerCase()
        .replace(/[^a-z]/g, '') // Remove non-alphabetic characters
        .split('') // Split into an array of characters
        .sort() // Sort the characters
        .join(''); // Join them back into a string
  
    return cleanAndSort(str1) === cleanAndSort(str2);
  }; */

// Solution 2

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

  mocha.setup("bdd");
  const { assert } = chai;
  
  describe("Anagram Checker", () => {
    it("Should return true for anagrams", () => {
      assert.equal(areAnagrams("listen", "silent"), true);
      assert.equal(areAnagrams("The Morse Code", "Here come dots"), true);
    });
  
    it("Should return false for non-anagrams", () => {
      assert.equal(areAnagrams("hello", "world"), false);
      assert.equal(areAnagrams("abc", "def"), false);
    });
  });
  
  mocha.run();