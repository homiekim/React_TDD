const fetchItem = require("../src/async.js");

describe("Async-test", () => {
  /* jest에서 비동기 코드를 검증하기 위해서 done으로 비동기 함수의 수행 시점을 명시해줘야함 */
  // it('async', (done)=> {
  //   fetchItem().then((item) => {
  //     expect(item).toEqual({ item: "error", price: 200 });
  //     done();
  //   });
  // })

  /* done 방식 보다는 promise를 return 하는 방법 권장 */
  it("async", () => {
    return fetchItem().then((item) => {
      expect(item).toEqual({ item: "ITEM", price: 200 });
    });
  });
  /* async - await 사용하는 방법 */
  it("async - await", async () => {
    const item = await fetchItem();
    expect(item).toEqual({ item: "ITEM", price: 200 });
  });

  /* resolve 랑 reject로 성공, 실패 테스트 */
  it("async - resolve", () => {
    expect(fetchItem()).resolves.toEqual({ item: "ITEM", price: 200 });
  });

  it("async - reject", () => {
    expect(fetchItem("error")).rejects.toBe("network error");
  });
});
