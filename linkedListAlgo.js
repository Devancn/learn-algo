class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  findByValue(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode;
  }

  // 插入之前先判断element对应的Node节点是否存在
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode) {
      const newNode = new Node(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(item) {
    const desNode = this.findByValue(item);
    if (desNode) {
      const prevNode = this.findPrev(item);
      prevNode.next = desNode.next;
    }
  }
  display() {}
  /**
   * 反转单链表
   * 1. 新建一个root节点作为反转节点之后的head节点
   * 2. 依次遍历当前链表上除head节点的节点
   * 3. 暂存当前节点的next指针指向的节点作为下次需处理的节点
   * 4. 先把当前要处理的节点的next指针指向新root节点的next指针指向的节点
   * 5. 把当前节点作为root节点的next指针指向的节点
   * 6. 最后把root节点作为当前head的节点
   */
  reverseList() {
    // 新建一个root节点
    const root = new Node("head");
    // 头节点的next指针指向的节点作为当前节点
    let currentNode = this.head.next;
    while (currentNode !== null) {
      // 暂存当前节点next指针指向的节点
      const next = currentNode.next;
      // 把当前节点的next指针指向root节点的next指针
      currentNode.next = root.next;
      // root节点的next指针指向当前节点
      root.next = currentNode;
      // 把之前暂存的节点作为当前节点继续依次遍历
      currentNode = next;
    }
    this.head = root;
  }

  reverseList1() {
    let currentNode = this.head.next;
    // 上一个遍历的节点
    let previousNode = null;
    while (currentNode !== null) {
      // 暂存下一个要处理的节点
      let nextNode = currentNode.next;
      // 把上一个遍历处理的节点赋值给当前节点的next指针
      currentNode.next = previousNode;
      // 把当前节点赋值给previousNode作为上一个处理节点
      previousNode = currentNode;
      // 把暂存的next节点赋值给currentNode
      currentNode = nextNode;
    }
    // 把反转好的链表加上头节点
    this.head.next = previousNode;
  }

  // 坚持fast与slow是否相等，相等则换存在环
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
      return false;
    }
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    // 先判断链表是否存在环
    if (this.checkCircle()) return false;
    let pos = 1;
    // 链表反转
    this.reverseList();
    let currentNode = this.head.next;
    while (currentNode !== null && pos < index) {
      currentNode = currentNode.next;
      pos++;
    }
    if (currentNode === null) {
      console.log("无法删除最后一个节点或者该节点不存在");
      return false;
    }
    this.remove(currentNode.element);
    this.reverseList();
  }
  // 求中间节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return slow;
  }
}

// 合并两个链表且按从小到大排序
function mergeSortedLists(listA, listB) {
  if (!listA) return listB;
  if (!listB) return listA;
  let a = listA;
  let b = listB;
  let resultList = undefined;
  if (a.element < b.element) {
    resultList = a;
    a = a.next;
  } else {
    resultList = b;
    b = b.next;
  }
  let currentNode = resultList;
  while (a !== null && b !== null) {
    if (a.element < b.element) {
      currentNode.next = a;
      a = a.next;
    } else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }
  if (a !== null) {
    currentNode.next = a;
  } else {
    currentNode.next = b;
  }
  return resultList;
}

debugger
const sortedList1 = new LinkedList();
sortedList1.insert(9, "head");
sortedList1.insert(8, "head");
sortedList1.insert(7, "head");
sortedList1.insert(6, "head");

const sortedList2 = new LinkedList();
sortedList2.insert(21, "head");
sortedList2.insert(20, "head");
sortedList2.insert(19, "head");
sortedList2.insert(18, "head");

let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next);
while (sortedList !== null) {
  console.log(sortedList.element);
  sortedList = sortedList.next;
}
