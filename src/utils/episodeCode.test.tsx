import episodeCode from "./episodeCode";

test("single digit number of season and episode to be zero padded", () => {
  expect(episodeCode(2, 4)).toBe("S02E04");
  expect(episodeCode(4, 9)).toBe("S04E09");
});

test("two digit number of season and episode should not be zero padded", () => {
  expect(episodeCode(12, 10)).toBe("S12E10");
  expect(episodeCode(15, 20)).toBe("S15E20");
});
