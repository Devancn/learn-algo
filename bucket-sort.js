/**
 * 思路：
 * 将数组中的数据按桶进行划分，将相邻的数据划分在同一个桶中
 * 每个桶用插入算法进行排序
 * 最后整合每个桶中的数据
 */

function bucketSort(array, bucketSize = 5) {
  if (array.length === 1) return array;
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  // 遍历数组并找到其中最大与最小值
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  // 根据最大值、最小值、桶的大小、计算得到桶的个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  // 根据桶的个数创建数组并存入buckets中
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  // 计算每一个值应该放在哪个桶中
  for (let i = 0; i < array.length; i++) {
    // 当前元素与最小值得差除以桶的个数就是桶的索引
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    sortedArray.push(...buckets[i]);
  }
  return sortedArray;
}

// 插入排序算法
function insertionSort(array) {
  if (array.length === 1) return;
  // 插入排序算法分已排序与未排序部分
  // 默认数组第一个元素为已排序
  for (let i = 1; i < array.length; i++) {
    let value = array[i]; // 表示要在已排序部分插入的数据
    let j = i - 1; // j为已排序部分的最后一个元素

    // 依次遍历已排序部分
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j]; // 把当前arr[j]元素往后挪动一位
      j--;
    }
    array[j + 1] = value; // 找到要插入的位置后把该元素插入数组
  }
}

const array = [22,5,11,41,45,26,29,10,7,8,30,27,42,43,40];
console.log(bucketSort(array, 5));