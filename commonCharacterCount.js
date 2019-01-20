/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.

[output] integer

*/

function commonCharacterCount(s1, s2) {
    var result = 0;
    var split1 = s1.split('');
    var split2 = s2.split('');
    for (var i = 0; i < split1.length; i++) {
        for (var j = 0; j < split2.length; j++) {
             if (split2[j] === split1[i]) {
                 split1.splice(i, 1);
                 split2.splice(j, 1);
                 result++;
                 i--;
        }
        }
    }
    return result;
}