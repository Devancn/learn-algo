/**
 * 二分查找
 * @param {array} array 
 * @param {number} target 在array中需要查找的数 
 */
function binaryFind(array = [], target) {
  if(array.length === 0) return -1;
  let start = 0;
  let end = array.length - 1;
  while(start <= end) {
    const middle = Math.floor((start + end) / 2);
    if(array[middle] === target) {
      return middle;
    }else if(array[middle] > target) {
      end = middle -1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
console.log(binaryFind(arr, 44))