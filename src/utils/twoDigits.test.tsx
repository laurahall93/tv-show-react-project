import twoDigits from "./twoDigits";

test("single digit number to be zero padded", () => {
  expect(twoDigits(2)).toBe(0o2);
  expect(twoDigits(4)).toBe(0o4);
});

test("two digit number should not be zero padded", () => {
  expect(twoDigits(12)).toBe(12);
  expect(twoDigits(10)).toBe(10);
});
