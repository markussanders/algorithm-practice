/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/
function arrayMaximalAdjacentDifference(inputArray) {
    let ranges = [];

    for (let i = 0; i < inputArray.length; i++) {
      let vals = [];
      vals.push(inputArray[i], inputArray[i + 1]);
      let sorted = vals.sort((a, b) => a - b);
      let range = sorted[0] - sorted[1];
      ranges.push(range);
    }

    ranges.sort((a, b) => a - b);
    return Math.abs(ranges[0]);
}