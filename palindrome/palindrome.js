// Solution 1
const isPalindrome = string => {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanedString = string.toLowerCase().replace(/[^a-z]/g, '');
  
    // Check if the cleaned string is equal to its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
  };
  

// Solution 2
/* const isPalindrome = string => {
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
}; */

mocha.setup("bdd");
const {
    assert
} = chai;

describe("Palindrome", () => {
    it("Should return true", () => {
        assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
        assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"),
            true
        );
    });

    it("Should return false", () => {
        assert.equal(isPalindrome("sit ad est love"), false);
        assert.equal(isPalindrome("sit ad est love"), false);
    });
});

mocha.run();