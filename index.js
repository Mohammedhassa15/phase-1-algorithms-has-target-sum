function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
  - n is the number of elements in the array.
  - We loop once through the array and do O(1) operations inside.
*/

/* 
  Add your pseudocode here
  - Create a new empty Set to store numbers we've seen
  - For each number in the array:
      - Calculate the complement (target - number)
      - If the complement is already in the Set:
          - Return true
      - Add the current number to the Set
  - After the loop, return false (no pair found)
*/

/*
  Add written explanation of your solution here
  This function checks if any two numbers in the array add up to the target.
  It does this by looping through each number and calculating what other number
  (complement) would add up to the target. If that complement has already been 
  seen in the array, we know we have a match and return true.
  Otherwise, we add the number to a Set for future checks.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // 3 + 7

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // 19 + 6

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // No pair adds to 4
}

module.exports = hasTargetSum;
