// Solution 1

const areAnagrams = (str1, str2) => {
    // Wash non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z]/g, '');
    const cleanStr2 = str2.replace(/[^a-z]/g, '');

}





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