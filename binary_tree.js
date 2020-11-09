// 树种的每个节点
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 搜索二叉树
class SearchTree {
  constructor() {
    this.root = null;
  }
  getPrev(num, find = false) {
    const point = this.root;
    let res = [];
    while(true && point) {
      // 从左节点中查找值比num小的节点
      if(point.left) {
        if(num < point.left.value || num < point.value) {
          point = point.left;
          continue;
        }
      }

      if(point.right) {
        if(num >= point.right.value || num >= point.value) {
          // 如果有多个节点值相同则缓存
          if(find && num === point.value) {
            res.push(point.value);
          }
          point = point.right;
          continue;
        }
      }
      
      if(find) {
        if(point.value === num) {
          res.push(point.value);
        }

        if(res.length === 0) {
          return null;
        }

        if(res.length === 1) {
          return res[0];
        }

        return res;
      }
      return point;
    }
  }
}