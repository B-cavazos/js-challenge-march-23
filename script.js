/* ====== Coding Challenge: Javascript Arrays 3.24.21 ======

3. Create a function that removes all unnecessary elements from an array
  a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
  b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];
4. Create a function that returns a duplicate free array
  a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
  b. the function should return [1, 4, 9, 100, 30] */



/*1. Create a function that creates a new array with a given value
  a. The function should take two parameters: the size of the array and the item to pass in
  b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
  c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples'] */
let items = [];
console.log(items);

const duplication = (arraySize, valueToPass) =>{
    for(i=0; i < arraySize; i++){
        items.push(valueToPass);
    }
};

duplication(10,'GO!');
console.log(items)


/* 2. Reverse: Write a function that reverses the order of the items in the array
  a. [1,2,3] = [3,2,1] */
let bevies = ['Red Bull', 'Calipco', 'Chai Tea'];
console.log(bevies);

const reverse = (array) =>{
    array.reverse();
    console.log('The reversed order is:', array);
};

reverse(bevies);