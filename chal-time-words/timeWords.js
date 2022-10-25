// Time Words

// Difficulty:
// Medium

// Concepts:
// General

// Write a function that turns a string of 24-hour time into words.
// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

// Handle noon and midnight specially:

// timeWord("00:00")
// // 'midnight'

// timeWord("12:00")
// // 'noon'

////////// SOLUTION //////////

const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }

    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log(timeWords("12:48"));

////////// ALGORITHM ACTIVITY //////////

const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor(arr.length / 2); // guess the median

        if (arr[mid] === value) {
            return mid; // if the number happens to be our mid point
        }
        else if (arr[mid] < value) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return false;
}
let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];
console.log(binarySearch(x, 68)); //true and return me the postition
console.log(binarySearch(x, 51));
