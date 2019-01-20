/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
 */

function allLongestStrings(inputArray) {
    let longest = [];
    let sorted = inputArray.sort((a, b) => b.length - a.length);
    let longestWord = sorted[0];
    longest.push(sorted[0]);
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].length === longestWord.length) {
            longest.push(sorted[i]);
        }
    }
    return longest;
}