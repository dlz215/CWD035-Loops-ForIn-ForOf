const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestForEach(arr) {
  let highest = 0;
  arr.forEach(num => {
    if (num > highest) {
      highest = num;
    }
  })
  return highest;
}

function biggestForOf(arr) {
  let highest = 0
  for (const num of arr) {
    if (num > highest) {
      highest = num;
    }
  }
  return highest;
}

console.log('forEach:')
console.log(biggestForEach(array));
console.log(biggestForEach(array2));
console.log(biggestForEach(array3));
console.log('forOf:')
console.log(biggestForOf(array));
console.log(biggestForOf(array2));
console.log(biggestForOf(array3));



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (const item in basket) {
    if (item === lookingFor) {
      return true;
    }
  }
  return false;
}

console.log(checkBasket(amazonBasket, 'toothpaste'))
console.log(checkBasket(amazonBasket, 'floss'))