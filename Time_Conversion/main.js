'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(time) {
    const [hoursStr, minutesStr, secondsStr, ampm] = time.split(/:|(?=[AP]M)/);

    // Parse hours, minutes, and seconds as integers
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    const seconds = parseInt(secondsStr, 10);

    // Adjust hours for PM
    if (ampm === 'PM' && hours < 12) {
        hours += 12;
    }

    // Handle midnight (12:00:00AM)
    if (ampm === 'AM' && hours === 12) {
        hours = 0;
    }

    // Format hours, minutes, and seconds as two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Return the military time as a formatted string
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
