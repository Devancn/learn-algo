const stack = require("./stack-based-on-linked-list");
console.log(stack, "stack");

class SampleBrowser {
  constructor() {
    this.normalStack = new stack.StackBasedLinkedList();
    this.backStack = new stack.StackBasedLinkedList();
  }
  pushNormal(name) {
    this.normalStack.push(name);
    this.backStack.clear();
  }

  back() {
    const value = this.normalStack.pop();
    if(value !== -1) {
      this.backStack.push(value);
      this.displayAllStack();
    } else {
      console.log('无法后退');
    }
  }

  front() {
    const value = this.backStack.pop();
    if(value !== -1) {
      this.normalStack.push(value);
      this.displayAllStack();
    } else{
      console.log('无法前进');
    }
  }

  // 打印栈内数据
  displayAllStack() {
    console.log("---后退页面---");
    this.backStack.display();
    console.log("---浏览页面---");
    this.normalStack.display();
  }
}

const browser = new SampleBrowser();
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.github.com');

browser.back();
browser.back();
browser.front();
browser.pushNormal('www.new.com');
