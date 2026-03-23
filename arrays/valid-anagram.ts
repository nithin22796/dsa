/**
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 *
 * An anagram contains the exact same characters with the same count,
 * just in a different order.
 *
 * Example 1: s = "anagram", t = "nagaram" → true
 * Example 2: s = "rat", t = "tar" → true
 * Example 3: s = "cat", t = "car" → false
 * Example 4: s = "aab", t = "bba" → false
 *
 * Difficulty: Easy
 * Topic: Arrays, HashMap
 */

function isAnagram(s: string, t: string): boolean {
  // your solution here
  if (s.length !== t.length) return false;

  const mapOfS = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const value = s[i];

    if (mapOfS.has(value)) {
      mapOfS.set(value, mapOfS.get(value)! + 1);
    } else {
      mapOfS.set(value, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const value = t[i];

    if (mapOfS.has(value)) {
      mapOfS.set(value, mapOfS.get(value)! - 1);
    } else {
      return false;
    }
  }

  // Check if all counts are zero
  for (const count of mapOfS.values()) {
    if (count !== 0) return false;
  }

  return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "tar")); // true
console.log(isAnagram("cat", "car")); // false
console.log(isAnagram("aab", "bba")); // false
