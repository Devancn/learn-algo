/**
 * 数组中两个数据交换
 * @param {array} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 不考虑空间消耗的话,请两个临时数组 X 和 Y,遍历数组arr,
 * 将小于 pivot 的元素都拷贝到临时数组 X，
 * 将大于 pivot 的元素都拷贝到临时数组 Y
 * 最后将连个数组合并，这样就需要额外的内存空间
 * @param {*} arr
 * @param {*} pivot
 * @param {*} left
 * @param {*} right
 */
function partition(arr, pivot, left, right) {
  // 分区元素
  const pivotVal = arr[pivot];
  let startIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex);
      startIndex++;
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex;
}

/**
 * 快速排序
 * @param {array} arr
 * @param {number} left 起始下标
 * @param {number} right 结束下标
 */
function quickSort(arr, left, right) {
  debugger
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
quickSort(testArr, 0, testArr.length - 1);
console.log(testArr);