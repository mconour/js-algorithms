/**
 * Function to check if two strings are anagrams.
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} - True if the strings are anagrams, false otherwise.
 */

const areAnagrams = (str1, str2) => {

    // Helper or filter function to clean and sort a string
    const cleanString = (str) =>
      str
        .toLowerCase()
        .replace(/[^a-z]/g, '') // Remove non-alphabetic characters
        .split('') // Split into an array of characters
        .sort() // Sort the characters
        .join(''); // Join them back into a string
    return cleanString(str1) === cleanString(str2);
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