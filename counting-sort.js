/**
 * 计数排序
 * @param {array} array
 */
function countingSort(array) {
  if (array.length <= 1) return;
  // 找出数组最大值
  const max = findMaxValue(array);
  // 数组大小为最大元素值+1
  const counts = new Array(max + 1);
  array.forEach((element) => {
    // 元素值作为counts数组的下标来计算每个元素在array中的个数
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;
  // 这里forEach执行的次数并不是根据counts.length的大小来的，new Array只传一个number时表示数组空间大小，
  // 但是值为empty，并不会被forEach callback所执行
  counts.forEach((count, i) => {
    // count为元素个数， i为元素
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
}

/**
 * 依次遍历找出数组最大值，也可以Math.max(...array)
 * @param {array} array
 */
function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
var tmp = [4,2,6,41,6]
countingSort(tmp)
console.log(tmp);