'use strict'; 

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  // loop over properties with INDICES
  for (let i in items) {
    console.log(i, items[i]);
  }
}
printIndices(['apple', 'berry', 'cantaloupe'])

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  // For a list of items, start at index 0 and loop through. Make an empty list 
  // for every other item, and append items at index 0,2, etc. 
  const emptyList = [];
  for (const i in items) {
    if (i % 2 === 0) {
    emptyList.push(items[i]);
  
  }
}
  console.log(emptyList);
}
everyOtherItem([0,1,2,3])

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  //Given an array of items and n, evaluate the N smallest items
  //Print in order from largest to smallest of the N items.
  let sortedValues = items.sort((a,b) => a - b);
  let slicedValues = sortedValues.slice(0,n);
  let reversed = slicedValues.reverse();

  console.log(reversed);
 
}
smallestNItems([0,3,4,2,1], 3)
