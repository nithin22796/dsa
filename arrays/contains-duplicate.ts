/**
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Given an array of integers, return true if any value appears
 * at least twice. Return false if all elements are distinct.
 *
 * Example 1: [1, 2, 3, 1] → true
 * Example 2: [1, 2, 3, 4] → false
 *
 * Difficulty: Easy
 * Topic: Arrays, HashSet
 */

function containsDuplicate(nums: number[]): boolean {
  // your solution here
  // Approach 1: Using a Set to track unique elements
  // return new Set(nums).size !== nums.length;

  // Approach 2: Using set and manually adding elements to it
  const newSet = new Set<number>();
  for (const num of nums) {
    if (newSet.has(num)) {
      return true; // Duplicate found
    }
    newSet.add(num);
  }
  return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
