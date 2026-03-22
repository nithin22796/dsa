/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers and a target, return indices of the
 * two numbers that add up to the target.
 * Each input has exactly one solution. You may not use the same element twice.
 *
 * Example 1: [2, 7, 11, 15], target = 9 → [0, 1]
 * Example 2: [3, 2, 4], target = 6 → [1, 2]
 * Example 3: [3, 3], target = 6 → [0, 1]
 *
 * Difficulty: Easy
 * Topic: Arrays, HashMap
 */

function twoSum(nums: number[], target: number): number[] {
  // your solution here
  const newMap = new Map<number, number>();

  for (let num = 0; num < nums.length; num++) {
    const value = nums[num];
    const complement = target - value;

    if (newMap.has(complement)) {
      return [newMap.get(complement)!, num];
    }
    newMap.set(value, num);
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
