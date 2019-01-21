/*
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. 
When she blows out the candles, she’ll only be able to blow out the tallest ones. 
Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully,
 since the tallest candles are of height 4 and there are 2 such candles.

Function Description:

Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

birthdayCakeCandles has the following parameter(s):

ar: an array of integers representing candle heights
Input Format

The first line contains a single integer, n, denoting the number of candles on the cake. 
The second line contains n space-separated integers, where each integer  describes the height of candle i.

Constraints

i<= n <= 10^5
i <= ar[i] <= 10^7

Output Format

Print the number of candles that can be blown out on a new line.

Sample Input:

4
3 2 1 3

Sample Output:

2
*/

function birthdayCakeCandles(ar) {
    //create a sum array
    //create a tallest variable
    //sort input arrray small to large
    //let element at last index equal the tallest
    //iterate through the input array 
        //if value us is equal to tallest
            //push it into total array
    //return total array.length;
    let tallArr = [];
    let sorted = ar.sort((a, b) => (a - b));
    let tallest = sorted[sorted.length - 1];
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === tallest) {
            tallArr.push(sorted[i]);
        }
    }
    return tallArr.length + 1;
}