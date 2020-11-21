class TrieNode{
  constructor(data) {
    this.data = data;
    // a - z
    this.children = new Array(26);
    // 是否结实节点
    this.isEndingChar = false;
  }
}

class TrieTree{
  constructor(data) {
    this.root = new TrieNode('/');
  }
  // 往Trie树种插入一个字符串
  insert(text = '') {
    // 把root节点作为当前访问的节点
    let node = this.root;
    // 遍历字符串文本，这里text的字符的codePoint要大于字符a的codePoint，不然会存在负数情况
    for(let char of text) {
      // 根据字符的码点与a字符的码点差计算索引
      let index = char.codePointAt(0) - 'a'.codePointAt(0);
      if(!node.children[index] && index >= 0) {
        node.children[index] = new TrieNode(char);
      }
      // 存在时把当前字符对应的节点作为当前访问的节点
      node = node.children[index];
    }
    // 该节点作为该字符串对应的结束节点
    node.isEndingChar = true;
  }
  find(text = '') {
    // 把root作为当前访问的节点
    let node = this.root;
    // 迭代查找字符串
    for(let char of text) {
      // 计算当前字符在Trie树中是否存在
      let index = char.codePointAt(0) - 'a'.codePointAt(0);
      if(node.children[index] && index >= 0) {
        // 当前字符在Trie中存在则把当前节点作为访问节点
        node = node.children[index];
      } else {
        // 此时在Trie中查找不到对应的节点返回false
        return false;
      }
    }
    // 返回查找文本最后一个字符对应节点的isEndingChar，如果为true则在字符串在Trie中存在
    return node.isEndingChar;
  }
}

let tree = new TrieTree();
let strs = ['how', 'hi', 'her', 'hello', 'so', 'see'];
for(let str of strs) {
  tree.insert(str);
}
console.log(tree);

console.log(tree.find('h'));