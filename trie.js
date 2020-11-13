class TrieNode{
  constructor(data) {
    this.data = data;
    this.children = new Array(26);
    // 是否结实节点
    this.isEndingChar = false;
  }
}

class TrieTree{
  constructor(data) {
    this.root = new TrieNode('/');
  }

  insert(text = '') {
    let node = this.root;
    for(let char of text) {
      // 根据字符的码点与a字符的码点差计算索引
      let index = char.codePointAt(0) - 'a'.codePointAt(0);
      if(!node.children[index]) {
        node.children[index] = new TrieNode(char);
      }
      node = node.children[index];
    }
    node.isEndingChar = true;
  }
  find(text = '') {
    let node = this.root;
    for(let char of text) {
      let index = char.codePointAt(0) - 'a'.codePointAt(0);
      if(node.children[index]) {
        node = node.children[index];
      } else {
        return false;
      }
    }
    return node.isEndingChar;
  }
}

let tree = new TrieTree();
let strs = ['how', 'hi', 'her', 'hello', 'so', 'see'];
for(let str of strs) {
  tree.insert(str);
}
debugger
console.log(tree);

// console.log(tree.find('world'));