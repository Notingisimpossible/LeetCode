/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// 不使用✖实现乘法
var multiply = function(A, B) {
  if(B === 0){
      return 0;
  }
  var res = A + multiply(A ,--B);
  return res;
};