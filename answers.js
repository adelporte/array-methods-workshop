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