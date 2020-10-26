/**
 * 合并两个数组
 * @param {array} left
 * @param {array} right
 */
function mergeArr(left, right) {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // leftIndex与rightIndex同时不能超出对应数组的长度
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return temp.concat(left.slice(leftIndex), right.slice(rightIndex));
}

/**
 *归并排序的核心思想
 *如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，
 *再将排好序的两部分合并在一起，这样整个数组就都有序了
 * @param {array} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  //数组中间下标
  const middle = Math.floor(arr.length / 2);
  // 把数组分割成左右两个子数组
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // 递归分解最后合并
  return mergeArr(mergeSort(left), mergeSort(right));
}

const testArr = [3, 1, 2];
const res = mergeSort(testArr);
console.log(res);
