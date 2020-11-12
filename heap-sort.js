
class HeapSort{
  constructor(originArray) {
    this.originArray = originArray;
  }
  buildHeap() {
    // 用数组来存储索引为0的不存
    const arr =  this.originArray;
    for(let i =  arr.length; i >= 1; i--) {
      this.heapify(arr, arr.length, i);
    }
    return arr;
  }

  // 自底向上堆化操作
  heapify(arr, length,i) {
    while(true) {
      //首先根据当前索引i的元素与其左/右节点中找出最大的一个
      // 堆（完全二叉树）的左节点为索引为 i * 2,右节点索引为 i * 2 + 1
      let maxPos = i;
      // 如果 索引i的左节点2*i存在且比当前索引i的元素大
      if(i * 2 <= length && arr[i] < arr[i * 2]) {
        maxPos = i * 2;
      }
      // 如果索引i有右节点且比MaxPos节点大
      if(i * 2 + 1 <= length && arr[maxPos] < arr[i * 2 + 1]) {
        maxPos = i * 2 +1;
      }
      // 如果最大节点的索引与i相同则退出循环体
      // 满足堆特点即：堆中每一个节点的值都必须大于其子树中每个节点的值（大顶堆）
      // 否则交换位置，父节点为maxPos对应的节点
      if(maxPos === i) break;
      // 索引i与 maxPos(左节点索引或右节点索引)对应节点交换位置
      this.swap(arr, i, maxPos);
      // 交换完后尝试根据maxPos查找更大的值
      i = maxPos;
    }

  }

  sort() {
    const arr = this.buildHeap();
    let length = arr.length - 1;
    
    while(length > 1) {
      // 交换顶元素和最后一位。顶元素永远是最大的。
      this.swap(arr, 1, length );
      length--;
      //剩下的元素重新建堆 直到len === 1 停止
      this.heapify(arr, length, 1)
    }
    console.log(arr);
  }

  swap(arr, i, maxPos) {
    let temp = arr[i];
    arr[i] = arr[maxPos];
    arr[maxPos] = temp;
  }
}

const arr = [null]
let i = 0
while (i <= 10) {
    // 随机生成一个0 - 100内正数
    const num = Math.floor(Math.random() * 100)
    arr.push(num)
    i++
}
const testHeap = new HeapSort(arr)
testHeap.sort()