const check = require("./check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("when check returns true", () => {
    check(() => true, onSuccess, onFail);
    // mock 함수가 호출 된 횟수 테스트
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0);
    // calls의 첫번째로 호출된 함수의 첫번째 인자가 yes인지 테스트 
    expect(onSuccess.mock.calls[0][0]).toBe('yes');

    /* 간편하게 사용할 수 있는 api가 존재 (mock함수에 대한 api)*/
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');


  });
  it("when check returns false", () => {
    check(() => false, onSuccess, onFail);
    // mock 함수가 호출 된 횟수 테스트
    expect(onSuccess.mock.calls.length).toBe(0);
    expect(onFail.mock.calls.length).toBe(1);
    // calls의 첫번째로 호출된 함수의 첫번째 인자가 yes인지 테스트 
    expect(onFail.mock.calls[0][0]).toBe('no');

    /* 간편하게 사용할 수 있는 api가 존재 (mock함수에 대한 api)*/
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith('no');
  });
});
