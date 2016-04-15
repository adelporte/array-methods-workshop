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
console.log(result);
var result2 = newArray3.filter(getPositives);
console.log(result2);