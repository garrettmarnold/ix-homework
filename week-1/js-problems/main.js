function printEven(until) {
    let arr = [];
    for (let i=0; i<until; i++) {
        if(i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr)
}

function printOdd(until) {
    let arr = [];
    for (let i=0; i<until; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
    }
    console.log(arr)
}

function arrayAverage(arr) {
    let total=0;
    for (let i=0; i < arr.length; i++) {
        total +=arr[i]
    }
    console.log(total/arr.length)
}

function printMax(arr) {
    console.log(Math.max(...arr));
} 

function printMin(arr) {
    console.log(Math.min(...arr));
}

function numOfVowels(word) {
    let arr = Array.from(word)
    let arr2 = arr.filter(x => 'aeiou'.includes(x));
    console.log(arr2.length);
}

function addTwoNumbers(num1, num2) {
    let total = num1 + num2;
    console.log(total)
}

function multiplyTwoNumbers(num1, num2) {
    let total = num1 * num2;
    console.log(total)
}

function postalCode(city) {
    switch(city) {
        case 'los angeles':
            console.log(90210);
            break;
        case 'irvine':
            console.log(92620);
            break;
        default:
            console.log("no city matches")
    }    
}

function sortAlphabetically(arr) {
    let arr2 = arr.sort((a, b) => a.localeCompare(b));
    console.log(arr2);
}

function sortNumerically(arr, order) {
    if(order === 'ASC') {
        let arr2 = arr.sort((a, b) => a - b);
        console.log("ascending:" + arr2)
    } else {
        let arr2 = arr.sort((a, b) => b - a);
        console.log("decending" + arr2)
    }
}

function reverseNumber(number) {};

functioncapataliazeSentence(sentence) {};

function returnOccurances(word, letter) {
    let total = 0;

    for(let i=0; i < word.length; i++) {
        if(word[i] === letter) {
            total += 1;
        }
    }
    console.log(total)
}

