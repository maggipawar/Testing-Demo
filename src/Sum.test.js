import Sum from "./Sum";

test("sum function", () => {
  expect(Sum(10, 20)).toBe(30);
});

test("sum function1", () => {
  let a = 20;
  let b = 30;
  let output = 50;
  expect(Sum(a, b)).toBe(output);
});
