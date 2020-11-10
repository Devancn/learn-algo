class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * 搜索二叉树
 */
class SearchTree {
  constructor() {
    this.root = null;
  }
  insert(num) {
    let node = new Node(num);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let parent = this.getPrev(num);
    if (num < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }
  //中序遍历
  print() {
    let point = this.root;
    if (point) {
      printAll(point.left);
      console.log(point.value);
      printAll(point.right);
    }
    function printAll(point) {
      if (point == null) {
        return;
      }
      printAll(point.left);
      console.log(point.value);
      printAll(point.right);
    }
  }
  //添加和查找的公用部分
  getPrev(num, find = false) {
    let point = this.root;
    let res = [];
    while (true) {
      if (point.left) {
        if (num < point.left.value || num < point.value) {
          point = point.left;
          continue;
        }
      }

      if (point.right) {
        if (num >= point.right.value || num >= point.value) {
          //搜索时如果有多个值则缓存
          if (find && num === point.value) {
            res.push(point.value);
          }
          point = point.right;
          continue;
        }
      }
      //如果是搜索
      if (find) {
        if (point.value === num) {
          res.push(point.value);
        }

        if (res.length === 0) {
          return null;
        }

        if (res.length === 1) {
          return res[0];
        }

        return res;
      }
      //如果是添加 返回的是应该添加的那各节点的父节点
      return point;
    }
  }
}

let searchTree = new SearchTree();
searchTree.insert(4);
searchTree.insert(1);
searchTree.insert(2);
searchTree.insert(5);
searchTree.print();