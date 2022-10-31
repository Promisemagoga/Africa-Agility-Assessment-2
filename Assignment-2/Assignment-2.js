//1.write a program that prints all even numbers from 0-20.

function printNumbers() {
    for (let i = 1; i < 21; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
printNumbers();

//2. Write a program that calculates the sum of numbers within an array
const arr = [10,30,80,100,50];

let sum = 0;

for (const value of arr){
sum+= value;
}

console.log(sum);

//3.write a function that reverses an array

const array1 = [10, 11, 12];
console.log(array1)
const reversedArray = array1.reverse();
console.log(reversedArray)

//4.write a function that return the number of vowels in a string

const vowels = ["a","e", "i", "o", "u"]
function countVowels(str){
    let Count = 0;
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            Count++;
        }
    }
    return Count
}
let string = "my name is";
console.log(countVowels(string));
//5.write a program that prints the multiplication table 6 = loop
let n = 6;
for (let i = 1; i <= 10; ++i){
    console.log(n + "*" + i + "=" + n * i);
}
//6.wite a program that remove duplicate value from array

function getUnique(arr){
    let uniqueArr = [];
    for(let i of arr){
        if(uniqueArr.indexOf(i) === -1){
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array = [8,9,10,8,10];
getUnique(array);

//7.write a program that calculates the average of numbers in an array

const av = [50,100,150]
const average = av.reduce((a, b) => a + b, 0) / av.length;
console.log(average);

//8.Given any two arrays, write a program that join the two arrays together

const names = "Promise Tshegofatso"
const surname = "Magoga"
console.log(names.concat(surname));