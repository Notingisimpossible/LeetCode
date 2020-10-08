// 翻转数组
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 方法一: 利用API
var reverseString = function(s) {
  return s.reverse()
};
// 方法二: 双指针
var reverseString = function(s) {
  let start = 0
  let end = s.length-1
  while(end>start){
      [s[start],s[end]] = [s[end],s[start]]
      start++
      end--
  }
  return s
};