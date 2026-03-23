/**
 * Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 *
 * Given an array of strings, group the anagrams together.
 * You can return the answer in any order.
 *
 * Example 1: ["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]
 * Example 2: [""] → [[""]]
 * Example 3: ["a"] → [["a"]]
 *
 * Difficulty: Medium
 * Topic: Arrays, HashMap, Sorting
 *
 * Key insight: Anagrams always sort to the same string.
 * Use the sorted string as the map key.
 */

function groupAnagrams(strs: string[]): string[][] {
  // your solution here

  const finalMap = new Map<string, string[]>();

  for (const str of strs) {
    const value = str.split("").sort().join("");

    if (finalMap.has(value)) {
      finalMap.get(value)!.push(str);
    } else {
      finalMap.set(value, [str]);
    }
  }

  return [...finalMap.values()];
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]
