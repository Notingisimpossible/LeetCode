/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针，选定一个瞄点不动，一个一个元素操作对比
var sortColors = function (nums) {
  let end = nums.length - 1
  let start = 0
  for (let i = 0; i <= end; i++) {
    if (nums[i] == 0) {
        nums[i] = nums[start];
        nums[start] = 0
        start++
    } else if (nums[i] == 2) {
        nums[i] = nums[end];
        i--
        nums[end] = 2
        end--
    }
}
  return nums
};

console.log(sortColors([1, 2, 1, 1, 1]))