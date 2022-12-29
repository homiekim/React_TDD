const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is empty when Stack initialized", () => {
    expect(stack.size()).toBe(0);
  });

  it("push item", () => {
    stack.push("item");
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe("item");
  });

  describe("pop test", () => {
    // stack이 비었을 때 pop하는 경우 테스트
    it("throw error when stack is empty", () => {
      expect(() => stack.pop()).toThrow("Stack is empty");
    });
    it("if stack is not empty, is returns top and remove at data", () => {
      stack.push("1");
      stack.push("2");
      stack.pop();
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe("1");
      stack.pop();
      expect(stack.size()).toBe(0);
      expect(() => stack.peek()).toThrow("Stack is empty");
    });
  });

  describe("peek", () => {
    it("throw error when stack is empty", () => {
      expect(() => stack.peek()).toThrow("Stack is empty");
    });
    it("if stack is not empty, it is return top", () => {
      stack.push("item");
      stack.push("item2");
      expect(stack.peek()).toBe("item2");
      expect(stack.size()).toBe(2);
    });
  });
});
