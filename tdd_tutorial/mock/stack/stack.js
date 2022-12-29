class Stack {
  constructor() {
    this.data = [];
    this.top = null;
  }

  size() {
    return this.data.length;
  }

  push(item) {
    this.data.push(item);
    this.top = this.data[this.data.length - 1];
  }

  pop() {
    if (this.data.length === 0) {
      throw new Error("Stack is empty");
    }
    const popData = this.data.pop();
    const topData =
      this.data.length === 0 ? null : this.data[this.data.length - 1];
    this.top = topData;
    return popData;
  }

  peek() {
    if (!this.top) {
      throw new Error("Stack is empty");
    }
    return this.top;
  }
}

module.exports = Stack;
