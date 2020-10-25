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
 * @param {array} arr
 */
function insertion(arr) {
  if (arr.length <= 1) return;
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
}
// console.log(insertion([2, 1, 0, 3, 5, 4]));

/**
 * 选择排序
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
