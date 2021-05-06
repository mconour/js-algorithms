// Solution 1

/*const isPalindrome = str => {

    
    const cleaned = str.replace(/\W/g, "").toLowerCase();
    return (cleaned === cleaned.split("").reverse().join(""));
}*/


// Solution 2

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