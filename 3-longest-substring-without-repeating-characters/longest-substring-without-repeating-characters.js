/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
//   if input is 'c', ' ' then return  1
  if (!s || s.length == 0) return 0;
  let start = 0;
  let end = 0;
  let charMap = {};
  let maxLen = 0;
  while (end < s.length) {
    // get the current character and its index in string s
    let c = s[end];
    if (!charMap[c]) {
      // add to map
      charMap[c] = true;
      // update the maximum length
      maxLen = Math.max(maxLen, end - start + 1);
      // move the start pointer forward
      end++;
    } else {
      // remove the character from the left side of barrier
      delete charMap[s[start]];
      start++;
    }
  }
  return maxLen;
};