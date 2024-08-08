/*
  Extract Examples


*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 4: Get members by a type
type allTypes = 'admin' | 'user' | 5 | 6 | 7 | true
type onlyNumbers = Extract<allTypes, number> // 5 | 6 | 7
// In the example above, we remove all literals that don't match the number type from the allTypes union. Hence, we are only getting the numbers.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 5: Get strings containing a substring from an union
type keys = 'userId' | 'tweetId' | 'userName' | 'tweetName'
type UserKey = Extract<keys, `${'user'}${string}`> // "userId" | "userName"
// The resulting UserKey type will be a union of the string literals from strings that start with the string "user." This case will include only the userId and userName string literals.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Example 6: Get strings with one of several possible values from an union
type keysX = 'userId' | 'tweetId' | 'id' | 'userName' | 'friendName'
type OnlyIdKey = Extract<keysX, `${string}${'id' | 'Id'}${string}`>
// "userId" | "tweetId" | "id"

// You can also use Extract to get all strings from a union that contain one of several possible substrings.
// In this case, the resulting OnlyIdKey type will be a union of the string literals from keys containing the id or Id. This case will include the userId, tweetId, and id string literals.
