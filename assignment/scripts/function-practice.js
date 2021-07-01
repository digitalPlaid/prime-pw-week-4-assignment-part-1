console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jasmine'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

// tests
let num1 = 2;
let num2 = 100;
let expected = 102;
let actual = addNumbers(num1,num2);
compareEqual('addNumbers',actual,expected)




// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1*num2*num3;
}

// tests
console.log('Testing multiplyThree');
num1 = 2;
num2 = 20;
num3 = 30
expected = 1200;
actual = multiplyThree(num1,num2,num3);
compareEqual('multiplyThree',actual,expected)



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0) return undefined;
  return array[array.length-1]
}

// tests
let someArray = [1,2,3,4,5];
expected = 5;
actual = getLast(someArray);
compareEqual('getLast',actual,expected, 'populated array');


someArray = [];
expected = undefined;
actual = getLast(someArray);
compareEqual('getLast',actual,expected, 'empty array');


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (element of array) {
    if (value === element) return true;
  }
  return false;
}


// tests
someArray = [1,2,3,4,5];
target = 4
expected = true;
actual = find(target, someArray);
compareEqual('find',actual,expected, 'target value in array')


someArray = [];
expected = undefined;
actual = getLast(someArray);
compareEqual('find',actual,expected, 'target value not present');





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {  
  if (letter === string[0].toLowerCase()) return true;
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function findPositives(array) {
  let positives = [];
  for (element of array) {
    if (element > 0) positives.push(element);
  }
  return positives;
}

// Is it ok if the arrays contain the same values but aren't in the same order?
// I'm going to assume it is. This function should return the positives in the order in which they appear,
// but it will be good practice to make something that compares the two arrays.
// So for me I'll say the arrays are equal if they contain the same set of numbers, regardless of order.

let testCase = 'empty array';
let testArray = [];
expected = [];
actual = findPositives(testArray);


testCase = 'no positives';
testArray = [-1,-2,-3,-1234];

testCase = 'some positives';
testArray = [12,54,-100,234,-2,0,100,-200];


testCase = 'all positives';
testArray = [1,2,3,4,234,653,4576,234];



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!





// function to compare if two arrays contain the same set of numbers, regardless of order
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    
  }

}



// function to test and write out some info that may be useful to the console.
function compareEqual(functionNameAsStr, actual, expected, testCase='') {
  console.log(`Testing ${functionNameAsStr}: `);
  let message = expected === actual ? 'Test passed!' : 'Test Failed!';
  if (testCase) console.log(`Testing case: ${testCase}`)
  console.log(message + ` Actual: ${actual}, Expected: ${expected}`);
}