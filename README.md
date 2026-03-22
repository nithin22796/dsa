# DSA Practice

A collection of DSA problems solved in TypeScript, organized by topic.

## Topics

### Arrays & HashMaps
Core pattern: use a `Set` or `Map` to reduce O(n²) brute force to O(n).

| Problem | Difficulty | Key Concept |
|---|---|---|
| [Contains Duplicate](./arrays/contains-duplicate.ts) | Easy | HashSet, early exit |
| [Two Sum](./arrays/two-sum.ts) | Easy | HashMap complement lookup |

### Two Pointers
Coming soon.

### Sliding Window
Coming soon.

### Trees
Coming soon.

### Dynamic Programming
Coming soon.

## Big O Cheatsheet

| Big O | Name | Example |
|---|---|---|
| O(1) | Constant | Array index access, Map/Set lookup |
| O(n) | Linear | Single loop |
| O(n²) | Quadratic | Nested loops |
| O(log n) | Logarithmic | Binary search |

## Key Patterns

- `Array.includes()` → O(n) — scans the array
- `Set.has()` / `Map.has()` → O(1) — instant lookup
- See a nested loop? Ask: can a Map eliminate the inner loop?
