// Solution 1

/* const isPalindrome = string => {
    // Convert the input string to lowercase and remove non-alphabetic characters
    const cleanString = string.toLowerCase().replace(/[^a-z]/g, '');
  
    // Reverse the cleaned string
    const reversedString = cleanString.split('').reverse().join('');
  
    // Check if the cleaned string is equal to the reversed string
    return cleanString === reversedString;
  }; */
  

// Solution 2

// Define a function called isPalindrome, which takes a single argument called 'string'
const isPalindrome = string => {
	// Define a constant array 'validCharacters' containing all lowercase letters from 'a' to 'z'
	const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

	// Convert the input 'string' to lowercase and split it into an array of characters
	const stringCharacters = string
		.toLowerCase()
		.split("")
		.reduce( 
			// Use the reduce method to filter out characters that are not in 'validCharacters' array
			(characters, character) =>
				validCharacters.indexOf(character) > -1
					? characters.concat(character)
					: characters,
			// Initialize the 'characters' accumulator as an empty array
			[]
		);

	// Join the filtered characters into a single string and compare it with its reverse
	return stringCharacters.join("") === stringCharacters.reverse().join("");
};

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