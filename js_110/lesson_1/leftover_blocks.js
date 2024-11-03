// Leftover blocks

/*
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

// (P)EDAC
Input: integer representing the amount of cubes
Output: integer representing the leftover amount of cubes after building the tallest possible structure

Explicit rules:
- Blocks are cubes
- Build the tallest valid structure and calculate the remaining cubes
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- a block in a lwer layer can support more than one block in an upper layer

Implicit requirements:
How to determine a layer is valid?
Given the first layer is always one block, and a block in an upper layer,
must be supported by four blocks in a lower layer, we can assert that the second layer,
will at least contain four blocks.



Questions
2. What is considerd an upper layer?


Test cases
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true


test cases suggests two things
1. if a layer has enough blocks, it can't simply use up more blocks


Algo
1. calculate how many layers can we build
2. init a layerCount variable with a value 1.
3. init a blockUsed variable with the count of 1. 
4. check the next total blocks used is not more than the blocks given.
5. if it is, break the while loop.
6. if it isn't, update the blocks used with the new total.
*/

function calculateLeftoverBlocks(blocks) {
  if (blocks == 0) return 0;

  let layerCount = 1;
  let blocksUsed = 1;

  while (blocksUsed <= blocks) {
    layerCount++;
    let newTotal = blocksUsed + layerCount * layerCount;

    if (newTotal > blocks) break;
    blocksUsed = newTotal;
  }

  return blocks - blocksUsed;
}

// from LS
function calculateLeftoverBlocks2(n) {
  let currentLayer = 0;
  let remainingCubes = n;

  let requiredCubes = (currentLayer + 1) ** 2;

  while (remainingCubes >= requiredCubes) {
    remainingCubes -= requiredCubes;
    currentLayer += 1;
    requiredCubes = (currentLayer + 1) ** 2;
  }

  return remainingCubes;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
