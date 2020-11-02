/**
 * 递归实现二分查找
 * @param {array} array
 * @param {number} start 起始索引
 * @param {number} end  结束索引
 * @param {number} target 查找目标
 */
function binaryFind(array = [], start, end, target) {
  let middle = Math.floor((start + end) / 2);
  if (array[middle] === target) {
    return middle;
  } else if (array[middle] > target) {
    return binaryFind(array, start, middle - 1, target);
  } else {
    return binaryFind(array, middle + 1, end, target);
  }
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
console.log(binaryFind(arr,0,arr.length - 1, 44))