//1. Write a function that compares two strings and checks if they are equal, regardless of case sensitivity. Use `toLowerCase()` or `toUpperCase()`.

let str1 = 'Jabascript';
let str2 = 'react';

function processValues(value1, value2) {
    // if (typeof value1 === 'string' && typeof value2 === 'string') {
    if (typeof value1 === typeof value2 ) {
        return [value1.toUpperCase() , value2.toUpperCase()]
    } else {
        return [value1, value2];
    }
}

console.log('Ans-1',processValues(str1,str2));

//2. Write a function that takes a sentence and a word as input and checks if the word is present in the sentence using `includes()` and `indexOf()`. Return the index of the first occurrence or -1 if not found.

function wordcheck(sentence,word) {
    if (sentence.includes(word)) {
        return sentence.indexOf(word);
    }else{
        return "Not Found";
    }
}  
console.log('Ans-2',wordcheck('i love bd','bd'));

//3. Create a function that checks whether a string starts with a specific substring using `startsWith()` and ends with another substring using `endsWith()`.


function stratEndCheck(sentence,start,end) {
    if (sentence.startsWith(start) && sentence.endsWith(end)) {
        return `Yes, it starts with "${start}" and ends with "${end}".`;
        }
        else if(sentence.startsWith(start)){
            return "Yes,It's Start With "+start;
        }
        else if   (sentence.endsWith(end)) {
            
            return "Yes,It's end With "+end;
        }else{
            return `Not With Start/End `
        }
    }
console.log('Ans-3',stratEndCheck('i love my country','i','y'));
    
    //4. Write a function that takes a sentence and splits it into an array of words using `split()`. Then, return the array of words.
    
function wordToArray(sentence) {
        return sentence.split(' ')
    }
    
console.log('Ans-4',wordToArray('this is not a pen'));
    
    //5. Create a function that extracts a portion of a string using both `slice()` and `substring()` methods. The start and end indices should be passed as arguments to the function.
    
function cutSentence(sentence,start,end) {
        const slices = sentence.slice(start,end);
        const substrings = sentence.substring(start,end);
        return {
            slice : slices,
            substring : substrings
        }
    }
    let result = cutSentence('fahad bin siddique',0,5)
console.log('Ans-5',result);

//Write a function that takes two strings and concatenates them using `concat()`. Also, demonstrate how to join an array of strings into a single string using `join()`.

function stringConvert(string1,string2,array) {
    const strArrayAdd = array.join('');
    const strAdd = string1.concat(string2);
    return {
        ArryToSingleString : strArrayAdd,
        Stringconcat : strAdd
    }
    
}

console.log('Ans-6',stringConvert('Fahad Bin',' Siddique',['bangla','desh']));

// let f = ['fa','had','bin','']
// let fa= f.join('')  Practice befor doing stringConvert Function
// console.log(fa);

//Write a function that takes a number and returns its absolute value using `Math.abs()`. Also, calculate the power of the number to another number using `Math.pow()`.

function absolutePower(absValue,base,power) {
    let absvalues = Math.abs(absValue);
    let powers = Math.pow(base,power);
    return {
        absoluteValue : absvalues,
        power: powers
    }
    
}
console.log('Ans-7',absolutePower(-4.2,4,2));

//Create a function that takes a decimal number and rounds it to the nearest integer using `Math.round()`. Also, return the number rounded up using `Math.ceil()` and rounded down using `Math.floor()`.

function decimalToInteger(value1,value2,value3) {
    value1=Math.round(value1);
    value2 = Math.ceil(value2);
    value3 = Math.floor(value3);
    return [value1,value2,value3]
}
console.log('Ans-8',decimalToInteger(8.4109,8.6789,10.926));

//9. Write a function that generates a random number between two given numbers using `Math.random()` and ensures that the result is a whole number.

function randominteger(value1,value2) {
     value1 = Math.round(value1)
     value2 = Math.round(value2)
     return Math.round(Math.random()*value2);
}
console.log('Ans-9',randominteger(0.4,99.6));



// let fa = Math.trunc((Math.random()*10))
// console.log(fa);

// function int(min,max) {
//     return Math.floor(Math.random()*(max-min))+min;
// }

// console.log(int(1,10));