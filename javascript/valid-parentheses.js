// problem = https://leetcode.com/problems/valid-parentheses/
// time taken = 10-20 min
// difficulty = easy
// big o = O(n)

// my soulution

// This function checks if a given string has balanced brackets
var isValid = function(s) {
    // Initialize an empty stack to track opening brackets.
    const stack = []
    // Define closing brackets and their corresponding opening brackets with an object.
    const pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i) // Get the current character.

        if (pairs[c]) { // Check if the character is a closing bracket.
            // If the stack is empty or the top of the stack doesn't match the corresponding opening bracket, return false.
            // we check the closing bracket becuase if it is a valid pair, there would be an opening bracket before it.
            if (stack.length === 0 || stack.pop() !== pairs[c]) {
                return false
            }
        } else {
            stack.push(c) // If it's an opening bracket, push it onto the stack.
        }
    }
    // Return true if the stack is empty (all brackets are properly paired), false otherwise.
    return stack.length === 0
};

// this was my first problem that i solved with stacks. i had to look up the solution to this problem as the first round i typed out stuggled with Misunderstanding of Parenthesis Validity and Unnecessary Complexity.
// Ideally the next time i see a solution that could be solved with a stack i can work it out myself.
