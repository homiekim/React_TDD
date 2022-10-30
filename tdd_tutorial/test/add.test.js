const add = require("../src/add.js");

test("add-test", () => {
  expect(add(1, 2)).toBe(3);
});
