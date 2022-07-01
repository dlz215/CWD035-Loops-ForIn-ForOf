const basket = ['apples', 'oranges', 'grapes']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 100
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

basket.forEach(item => console.log(item))

// 'FOR OF' LOOP
for (const item of basket) {
    console.log(item)
}

// Can use 'let' if changing variable
for (let item of basket) {
    item = item + '!'
    console.log(item)
}

// CONCEPT: ITERABLES
// Things you can iterate over: arrays, strings
// Error: "objectName is not iterable..."
for(const letter of 'basket') {
    console.log(letter)
}

// 'FOR IN' LOOP
// CONCEPT: ENUMERATION / ENUMERABLE
// 'for in' loop enumerates object properties
for (const item in detailedBasket) {
    console.log(item);
}

// will return index if run on an array
for (const index in basket) {
    console.log(index);
}

