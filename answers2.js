/*Exercice 1 - Write a function called printPositives 
that takes an array and uses its forEach method to print only the positive numbers.*/

function printPositives(array1) {
    var newArray = [];
    array1.forEach(function(num) {
        if(num > 0) {
            newArray.push(num);
        }
    })
    return newArray;
}

//console.log(printPositives([20, 50, -88, -660, 50, 50]))

/*Exercice 2 - Similar to the previous exercise, write a function called getPositives 
that takes an array and uses its filter method to return a new array with only the positive numbers*/

function onlyPositive(num) {
    if (num > 0) {
        return num;
    }
}

function getPositives(array2) {
    return array2.filter(onlyPositive());
}

//console.log(printPositives([20, 50, -88, -660, 50, 50]))

/*Exercice 3 - Write a function called filterArray that takes an array AND a function as arguments. 
Your filter function should return a new array 
that contains only the elements where the passed function returns a truthy value.*/

function iftrue(num) {
    if(num) {
        return num;
    }
}

function filterArray(array3, truth) {
    return array3.filter(truth);
}

//console.log(filterArray([20, 50, -88, -660,0, false, 50, 50], iftrue))


/*Exercice 4 - Write a function called longestWord that takes a string as argument, 
and returns the longest word in the string. 
You should use Array.prototype.reduce to do your work.*/

function longestWord(string1) {
    var sliptString = string1.split(" ");
    return sliptString.reduce(function(prev, next) {
        if (prev.length < next.length) {
            prev = next;
        }
        return prev;
    })
}

//console.log(longestWord("Hello the last word is the longest fdfdffdfdfddfdf"))

/*Exercice 5 - Write a function called count Vowels 
that takes a string and returns the number of vowels in the string. 
You should use Array.prototype.reduce to do your work.*/

function Vowels(str5) {
    var sliptString = str5.split("");
    var vowels = ["a", "e", "i", "o", "u", "y"];
    return sliptString.reduce(function(acc, next) {
        if (vowels.indexOf(next) !== -1) {
            acc += 1;
        }
        return acc;
    }, 0)
}

var newString10 = "awhat is the longest word in there";

//console.log(Vowels(newString10));

/*Exercice 6 - Write a function called highLow that takes an array of numbers, 
and returns an object with a property highest containing 
the highest number, and a property lowest containing the lowest number, 
using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], 
your function should return {highest: 40, lowest: -10}.*/

function highLow(arrayGreat) {
     return arrayGreat.reduce(function(init, next) {
         if (init.highest < next) {
             init.highest = next;
         } if (init.lowest > next) {
             init.lowest = next;
         }
         return init;
     }, {highest: -Infinity,
         lowest: Infinity
     })
    }

var newArray88 = [20, 80 ,50 , 20, 50, 6, 0, 50 ,80, 55]
//console.log(highLow(newArray88));

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

function highLowTwo(newArray888) {
    return newArray888.reduce(function(init, next) {
        if(init.highest < next) {
            init.secondHighest = init.highest;
            init.highest = next;
        } else if (init.secondHighest < next) {
            init.secondHighest = next;
        }
        if (init.lowest > next) {
            init.secondLowest = init.lowest;
            init.lowest = next;
        } else if (init.secondLowest > next) {
            init.secondLowest = next;
        }
        return init;
    }, {highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    })
}

var newArray888 = [558, 55, 666, -44, -88, -222, -44];

//console.log(highLowTwo(newArray888));

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

function removeSpace(let) {
    if(let != " ") {
        return let;
    }
}

function countChars(str44) {
    var newArray11 = str44.toLowerCase().split("").filter(removeSpace);
    return newArray11.reduce(function(init, next) {
    if(!init[next]) {
        init[next] = 1;
    } else {
        init[next] ++;
    }
    return init;
}, {})
}

var thisIsAValue = "aaabbc";

console.log(countChars(thisIsAValue));


/*Exercise 9
In this exercise, we're going to imagine that we are storing people information in a database, 
and that we queried our database to retrieve a list of people.

Our database returns to us an array of people objects, 
and each of them has a unique ID that the database uses to refer to it.

Here's what our person data could look like:

[
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
For this exercise, we want to use Array.prototype.reduce to 
transform our array of people into an object, keyed with the unique ID.

The end result should look like this:

{
  "KeXoYg92is": {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  "NkALmSWtUp": {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  "m7LPbJYSUg": {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
}

Write a function called peopleById that 
takes an array of people and returns an object where each person is keyed by their unique ID.

You have effectively created what we call an index, not unlike the one you have in your phonebook.*/

var arrayOfPeople = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]