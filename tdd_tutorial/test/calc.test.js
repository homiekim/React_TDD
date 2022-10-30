const Calculator = require("../src/calc.js");

// test("calc-test", () => {
//   const test_calc = new Calculator();
//   for (let i = 0; i < 1000; i++) {
//     const val = test_calc.value;
//     test_calc.add(i);
//     expect(test_calc.value).toBe(val + i);
//   }
// });
/* describe를 사용하면 관련된 테스트를 하나로 묶을 수 있음 */
describe("calc-test", () => {
  /* 모든 테스트가 시작 전에 공통적으로 수행해야하는 로직이 있다면 beforeEach를 사용할 수 있음 */
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  it("inits with zero", () => {
    expect(cal.value).toBe(0);
  });
  it("set test", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });
  it("add-test", () => {
    cal.add(4);
    expect(cal.value).toBe(4);
  });
  it("subtract-test", () => {
    cal.set(6);
    cal.subtract(3);
    expect(cal.value).toBe(3);
  });
  it("multi-test", () => {
    cal.set(4);
    cal.multiply(5);
    expect(cal.value).toBe(20);
  });

  /* describe 안에 또다른 그룹을 만들 수 있음 */
  describe("divide-test", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("divide-test", () => {
      cal.set(20);
      cal.divide(5);
      expect(cal.value).toBe(4);
    });
  });
});
