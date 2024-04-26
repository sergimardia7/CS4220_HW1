Problem 1 - (10 points)
Write a function called swapKeyValues

This function takes one argument which is an object
This function swaps the keys and values of the given object
The keys become the values and the values become the keys
The function returns a new object with the swapped key-value pairs
 

Examples:
const swapped = swapKeyValues({ scooby: 'dog', garfield: 'cat', dafy: 'duck', bugs: 'bunny' });

console.log(swapped):
// output: { dog: 'scooby', cat: 'garfield', duck: 'dafy', bunny: 'bugs' }
Problem 2 - (15 points)
Write a function called mapLetters

This function takes one argument which is an array of letters
This function creates an object where the lowercase letter is the key and the uppercase letter is the value
This function creates an object so that is in alphabetical order
This function returns the created object
 

Example:
const mapped = mapLetters(['X', 'a', 'b', 'y', 'z', 'C']);

console.log(mapped);
// output: {
//     'a': 'A',
//     'b': 'B',
//     'c': 'C',
//     'x': 'X',
//     'y': 'Y',
//     'z': 'Z'
// }
Problem 3 - (20 points)
Write a function called convertFollowers

This function takes one argument which is an array of objects representing users and their followers
Each object has the keys 'name' and 'followers', where 'followers' can contain a number followed by 'k', indicating thousands
The function converts the followers into numerical values, where 'k' represents thousands
The function returns an array of updated objects with the converted numerical values
 

Example:

const converted = convertFollowers([
        { name: 'Harley Quinn', followers: '97.1k' },
        { name: 'Green Lantern', followers: '999' },
        { name: 'Poison Ivy', followers: '21.7k' },
        { name: 'Robin', followers: '11.1k' }
]);

console.log(converted);
// output: [
//     { name: 'Harley Quinn', followers: 97100 },
//     { name: 'Green Lantern', followers: 999 },
//     { name: 'Poison Ivy', followers: 21700 },
//     { name: 'Robin', followers: 11100 }
// ]

Problem 4 - (25 points)

Write a function called longestCommonPrefix

This function takes one argument which is an array of strings
This function should determine the longest common prefix among the given strings
This function returns the longest common prefix as
If there's no common prefix, return an empty string
 

Example:

const longest1 = longestCommonPrefix(['flow', 'floof', 'flower']));

console.log(longest1);
// output: 'flo'

const longest2 = longestCommonPrefix(['dog', 'racecar', 'car']);

console.log(longest2);
// output: ''
Problem 5 - (30 points)

Write two functions: one to capitalize the first letter of a word, and another to transform each word in an array using the first function.

Write a function called capitalize

This function accepts one argument which is a string representing a word
This function should capitalize the first letter of the word
This function returns the modified word
Write a higher order function called transformWords

This function accepts 2 arguments
an array of strings representing words
a function that can transform the words in an array
This function should apply a function (eg: capitalize) to each word in the array
This function returns a new array with the modified words
 

Example:

const words = ['apple', 'banana', 'pineapple', 'orange', 'peach', 'pear', 'plum'];
const capitalized = transformWords(words, capitalize);

console.log(capitalized);
// output: [ 'Apple', 'Banana', 'Pineapple', 'Orange', 'Peach', 'Pear', 'Plum' ]
