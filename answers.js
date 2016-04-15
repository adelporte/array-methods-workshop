/*Exercice 1 - Write a function called printPositives 
that takes an array and uses its forEach method to print only the positive numbers.*/

function printPositives (array) {
        array.forEach(function(element) {
            if (element > 0) {
                console.log(element);
            }
        })
}

var newArray = [2, 5, 6, -4, -8, -5, 6];
printPositives(newArray);

/*Exercice 2 - Similar to the previous exercise, write a function called getPositives 
that takes an array and uses its filter method to return a new array with only the positive numbers*/
var newArray2 = [2, 5, 6, 10, -8, -58, -4, -8, -5, 10, -11, 50];
var newArray3 = [5, -15, 58, -100, 59, -800, 2, 0, -48, 55];

function getPositives(num) {
    if(num > 0) {
        return num;
    }
}

var result = newArray2.filter(getPositives);
//console.log(result);
var result2 = newArray3.filter(getPositives);
//console.log(result2);

/*Exercice 3 - Write a function called filterArray that takes an array AND a function as arguments. 
Your filter function should return a new array 
that contains only the elements where the passed function returns a truthy value.*/

var newArray4 = [10, 0, 55, 45, 0, 89, 45];
var newArray5 = [false, true, false, true];

function filterArray(array, func) {
    return array.filter(func);
}

function returnsTrueValues(num) {
    if (num) {
        return num;
    }
}

var finalResult = filterArray(newArray4, returnsTrueValues);
/*console.log(finalResult);*/

/*Exercice 4 - Write a function called longestWord that takes a string as argument, 
and returns the longest word in the string. 
You should use Array.prototype.reduce to do your work.*/

function longestWord(string) {
    var sliptString = string.split(" ");
    return sliptString.reduce(function(prev, next){
        if(prev.length < next.length){
            prev = next;
        }
        return prev;
    });
}

var newString = "what is the longest word in there";

console.log(longestWord(newString));

/*Exercice 5 - Write a function called count Vowels 
that takes a string and returns the number of vowels in the string. 
You should use Array.prototype.reduce to do your work.*/

function countVowels(string) {
    var splitArray = string.split("");
    var vowels = ["a", "e", "i", "o", "u", "y"];

    return splitArray.reduce(function(prev, next) {
        if (vowels.indexOf(next) !== -1) {
            prev++;
        }
        return prev;
    },0);
}

var newString10 = "awhat is the longest word in there";

console.log(countVowels(newString10));


/*Exercice 6 - Write a function called highLow that takes an array of numbers, 
and returns an object with a property highest containing 
the highest number, and a property lowest containing the lowest number, 
using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], 
your function should return {highest: 40, lowest: -10}.*/

function highLow(newArray) {
    return newArray.reduce(function(acc, next) {
        if (acc.highest < next) {
            acc.highest = next;
        }
        if (acc.lowest > next) {
            acc.lowest = next;
        }
        return acc;
    }, {
        highest: -Infinity,
        lowest: Infinity
    });
}

var thisIsAnArray = [10, 50, 8, 65, 4798698697697597659765674875486548640];

console.log(highLow(thisIsAnArray));

/*Exercice 7 - Expanding on exercise 6, write a function called 
highLowTwo that takes an array of numbers, 
and returns the higest, second highest, lowest, 
and second lowest numbers.

For example, starting with [1, -10, 20, 40, 5], 
your function should return:

{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}*/

function highLowTwo(arrNumbers) {
    return arrNumbers.reduce(function(acc, next) {
        if (next > acc.highest) {
            acc.secondHighest = acc.highest;
            acc.highest = next;
        }
        else if (next > acc.secondHighest) {
            acc.secondHighest = next;
        }
        if (next < acc.lowest) {
            acc.secondLowest = acc.lowest;
            acc.lowest = next;
        }
        else if (next < acc.secondLowest) {
            acc.secondLowest = next;
        }
        return acc;
    }, {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    });
}

var theArray = [10, -50, 40, -9, 58, -5, 100000000, 9999999];
console.log(highLowTwo(theArray));

/*Exercice 8 - Write a function called countChars that takes a string, 
and returns an object where the keys are letters, 
and the value is the number of times that letter appears.

For example, with input "hello world", the output should be:

{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}*/
function removeSpaces (char) {
    if (char !== " ") {
        return char;
    }
}


function countChars(aString) {
    var thisArray = aString.toLowerCase().split("").filter(removeSpaces);
    return thisArray.reduce(function(acc, next) {
        if (!acc[next]) {
            acc[next] = 1;
        } else {
            acc[next] = acc[next] + 1;
        }
        return acc;
    }, {});
}

var thisIsAValue = "This is an amazing string";

console.log(countChars(thisIsAValue));

