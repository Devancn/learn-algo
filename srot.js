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
console.log(bubbleSort([2, 1, 0, 3, 5, 4]));

/**
 * 插入排序
 * @param {array} arr 
 */
function insertion(arr) {
  if (arr.length <= 1) return;
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j++) {
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
console.log(insertion([2, 1, 0, 3, 5, 4]));