// problem = https://leetcode.com/problems/valid-anagram/description/
// time taken = 20-30 min
// difficulty = easy

// soulution
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false // if they are not the same length they are not anagrams
    const count = {} // create a hashmap to store the count of each char
    const n = s.length // store the length of the string
    for(let i = 0; i < n; i++) { // iterate through the string
        if(!count[s[i]]) count[s[i]] = 0 // if the char is not in the hashmap add it
        if(!count[t[i]]) count[t[i]] = 0 // "^^"
        count[s[i]]++ // increment the count of the char
        count[t[i]]-- // decrement the count of the char
    }
    for(let c in count) { // iterate through the hashmap
        if(count[c] !== 0) return false // if the count is not 0 then the strings are not anagrams
    }
    return true
};

// this solutions works becuase if there is anything other than a 0 in the hashmap, there is not a matching number of letter since we increment and decrement the count based on the letters. if the count is 0 for every letter then there is a matching number of letters and the strings are anagrams.



// my first solution (has bugs)
var isAnagram = function(s, t) {
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            const c = t.charAt(i)

            if (!s.includes(c)) {
                return false
            }
        }
    } else {
        return false
    }

    return true
};

// This quickly ran into problems where it only checks if one string has a char, it does not check if they occor the same number of times. so i had to look up a solution that tought me hashmaps and how to use them to properly solve this problem
