// 相当于map操作^_^
class HashTable{
  constructor() {
    this.table = [];
  }
  // 散列函数
  loseHashCode(key = '') {
    var hash = 0;
    for(let i = 0; i <key.length; i++) {
      hash += key.codePointAt(i);
    }
    // 使用一个任意数与hash取余，使hash尽可能小
    return hash % 27;
  }

  // 向散列表增加一个新的项
  put(key, value) {
    // 根据key计算出索引
    let position = this.loseHashCode(key);
    console.log(key + '-' + position);
    this.table[position] = value;
  }
  // 根据键从散列表删除值
  remove(key) {
    this.table.splice(this.loseHashCode(key), 1);
  }
  // 返回根据键值检索到的特定的值
  get(key) {
    return this.table[this.loseHashCode(key)]     
  }
}

const hash = new HashTable();
hash.put('devan', 'devan1994@gmail.com');
hash.put('dxh', 'wydingxiaohuan@163.coim');
console.log(hash,'hash')