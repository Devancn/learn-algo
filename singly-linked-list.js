// 链表中的每个节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 单链表
class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  /**
   * 根据item值查找节点
   * @param {*} item
   */
  findByValue(item) {
    // 获取头节点的后继指针next指向的节点
    let currentNode = this.head.next;
    // 根据节点指针依次遍历，直到找到相应的节点
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * 根据index查找节点,下标从0开始
   * @param {*} index
   */
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0; // 记录节点下标
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  /**
   * 向链表末尾追加节点
   * @param {*} newElement
   */
  append(newElement) {
    const newNode = new Node(newElement);
    let currentNode = this.head;
    // 尾节点next指针指向一个null
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
   * 指定元素向后插入一个新节点, 返回-1 表示element不存在，插入失败
   * @param {*} newElement
   * @param {*} element
   */
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === null) {
      return -1;
    }
    // 根据newElement实例化一个链表节点
    const newNode = new Node(newElement);
    // 先把要插入的节点的next指针指向当前节点的next指针
    newNode.next = currentNode.next;
    // 把当前的next指针指向新节点
    currentNode.next = newNode;
  }

  /**
   * 根据节点element信息查找与之对应的前一个节点
   * @param {*} item
   */
  findPrev(item) {
    let currentNode = this.head;
    // 从头节点依次遍历，如果当前节点的next指针指向的节点的element与item相等则当前节点为item对应节点的前一个节点
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * 根据值删除对应节点
   * @param {*} item
   */
  remove(item) {
    const prevNode = this.findPrev(item);
    if (prevNode === null) {
      return;
    }
    // 把要删除的节点的上一个节点的next指针指向要删除节点的next指针
    prevNode.next = prevNode.next.next;
  }

  /**
   * 依次遍历链表上的每个节点的element信息
   */
  display() {
    debugger;
    let currentNode = this.head.next;
    while (currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();
const base = "a".codePointAt(0);
for (let code = base; code < base + 10; code++) {
  linkedList.append(String.fromCodePoint(code));
}

if (linkedList.insert("2", "b") === -1) {
  console.log("insert失败");
}

linkedList.remove("b");

console.log(linkedList.findByValue("2"));

// linkedList.display();
