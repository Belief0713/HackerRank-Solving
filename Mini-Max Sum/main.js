'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
     arr.sort((a, b) => a - b);

    // Calculate the minimum sum (sum of smallest four integers)
    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

    // Calculate the maximum sum (sum of largest four integers)
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

    console.log(minSum+" "+maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
