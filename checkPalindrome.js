/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
 */

// assuming user input may contain special characters
// function checkPalindrome(inputString) {
//     let noSymbols = /[^A-Za-z0–9]/g;
//     let lowerCaseStr = inputString.toLowerCase().replace(noSymbols, '');
//     let reversedStr = lowerCaseStr.split('').reverse().join('');
//     return reversedStr === lowerCaseStr;
// }


function checkPalindrome(inputString) {
    return inputString.split('').reverse().join('') === inputString;
}
