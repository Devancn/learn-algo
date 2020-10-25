/**
 * 冒泡排序
 * @param {array} arr
 */
function bubbleSort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([2, 1, 0, 3, 5, 4]));

/**
 * 插入排序
 * 当我们需要将一个数据 a 插入到已排序区间时，需要拿 a 与已排序区间的元素依次比较大小，找到合适的插入位置。
 * 找到插入点之后，我们还需要将插入点之后的元素顺序往后移动一位，这样才能腾出位置给元素 a 插入。
 * @param {array} arr
 */
function insertion(arr) {
  if (arr.length <= 1) return;
  for (let i = 1; i < arr.length; i++) {
    // 需要插入已排好序部分的位置的元素（待插入元素）
    const temp = arr[i];
    let j = i - 1;
    // 在已经排序的部分依次从后向前遍历，如果某比待元素元素大则，把该元素位置向后移动一位
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp; // 把待插入元素的插入对应位置
  }
  return arr;
}
// console.log(insertion([2, 1, 0, 3, 5, 4]));

/**
 * 选择排序
 * 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
 * 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 * @param {array} arr
 */
function selectionSort(arr) {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
console.log(selectionSort([2, 1, 0, 3, 5, 4]));
