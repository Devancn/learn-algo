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
  remove(num) {
    let point = this.root;
    let parent = null;
    let tree = this;
    let res = null;

    while (true) {
      if (point.left) {
        if (num < point.left.value || num < point.value) {
          parent = point;
          point = point.left;
          continue;
        }
      }
      if (point.right) {
        if (num >= point.right.value || num >= point.value) {
          if (num === point.value) {
            delMethod(point, parent);
            if (point === null) {
              point = this.root;
            } else {
              parent = parent;
              point = parent.right;
            }
            res = true;
            continue;
          }
          parent = point;
          point = point.right;
          continue;
        }
      }
      if (point.value === null) {
        res = true;
        delMethod(point, parent);
      }
      break;
    }
    return res;
    function delMethod(delNode, parent) {
      let p = delNode;
      let pp = parent;

      // 删除的节点有左右两个子节点
      if (p.left != null && p.right != null) {
        // 查找右子树中最小节点
        let minP = p.right;
        let minPP = p;
        // 左边的值小于右边的值
        while (minP.left != null) {
          minPP = minP;
          minP = minP.left;
        }
        // 用找到最小节点值赋值给要删除的节点的value
        p.value = minP.value;
        p = minP;
        pp = minPP;
      }

      let child;
      if (p.left !== null) {
        child = p.left;
      } else if (p.right !== null) {
        child = p.right;
      } else {
        child = null;
      }
      if ((pp = null)) {
        tree.root = child;
      } else if (pp.left === p) {
        pp.left = child;
      } else {
        pp.right = child;
      }
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
