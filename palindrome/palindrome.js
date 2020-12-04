const isPalindrome = string => {
    const cleaned = string.replace(/\W/g, "").toLowerCase();

    return (
        cleaned ===
        cleaned
        .split("")
        .reverse()
        .join("")
    );
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