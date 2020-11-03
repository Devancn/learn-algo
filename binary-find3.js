/**
 * 在array中查找第一个与target相同的值
 * @param {array} array
 * @param {number} target
 */
function binaryFindFirst(array = [], target) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if(array[mid] > target) {
      end = mid - 1;
    } else if(array[mid] < target) {
      start = mid + 1;
    } else {
      /*
        1. 如果mid等于0，那这个元素已经是数组的第一个元素
        2. a[mid]的前一个元素a[m-1]不等于value，则说明a[mid]就是要找到的元素
      */
      if(mid === 0 || array[mid - 1] !== target) {
        return mid
      } else {
        end = mid - 1;
      }
    }
  }
}
const array = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9];
console.log(binaryFindFirst(array,4))