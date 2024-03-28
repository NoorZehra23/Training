
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10];


//indexof returns the index of first occurance.. so if the array item index and indexof are sem it means not duplicate.. else it returns false
function filterDuplicates(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index; 
    });
}

function findSquare(arr) {
    let resultArray = [];
    arr.forEach(item => {
        let squaredValue = item * item;
        resultArray.push(squaredValue);
    });
    return resultArray;
}

let a="5";
let multiply=a*arrayWithDuplicates[4];
let concate=a+arrayWithDuplicates[4];

// Usage example
const uniqueArray = filterDuplicates(arrayWithDuplicates);
const squaredArray = findSquare(uniqueArray);
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array with duplicates removed:", uniqueArray);
console.log("Array with Squared Values:", squaredArray);
console.log("Example of Type Coercion (Array to string Concatination):",concate);
console.log("Example of Type Coercion (String to Int):",multiply);

