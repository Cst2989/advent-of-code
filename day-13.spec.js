const { compare } = require('./day-13-part-1.js');

test('Compare [1,1,3,1,1] vs [1,1,5,1,1] are in the right order', () => {
  expect(compare([1, 1, 3, 1, 1], [1, 1, 5, 1, 1])).toBe(true);
});

test('Compare [[1],[2,3,4]] vs [[1],4] are in the right order', () => {
  expect(compare([[1], [2, 3, 4]], [[1], 4])).toBe(true);
});

test('Compare [9] vs [[8,7,6]] are in the right order', () => {
  expect(compare([9], [[8, 7, 6]])).toBe(false);
});

test('Compare  [[4,4],4,4] vs [[4,4],4,4,4] are in the right order', () => {
  expect(compare([[4, 4], 4, 4], [[4, 4], 4, 4, 4])).toBe(true);
});

test('Compare [7,7,7,7] vs [7,7,7] are not in the right order', () => {
  expect(compare([7, 7, 7, 7], [7, 7, 7])).toBe(false);
});

test('Compare  [] vs [3] are in the right order', () => {
  expect(compare([], [3])).toBe(true);
});

test.only('Compare  [] vs [0, 6, 7 , 9] are in the right order', () => {
  expect(compare([], [0, 6, 7, 9])).toBe(true);
});
test('Compare [[[]]] vs [[]] to not be in the right order', () => {
  expect(compare([[[]]], [[]])).toBe(false);
});

test('Compare [1,[2,[3,[4,[5,6,7]]]],8,9] vs [1,[2,[3,[4,[5,6,0]]]],8,9] to not be in the right order', () => {
  expect(
    compare(
      [1, [2, [3, [4, [5, 6, 7]]]], 8, 9],
      [1, [2, [3, [4, [5, 6, 0]]]], 8, 9]
    )
  ).toBe(false);
});

test('Compare [[[],2,9,4],[],[[[],[0]],[[7,0,10,8],[10,5,5,4,1],0,6]],[]] vs [[[8], [3, 6, 9, [10, 4, 2], [4, 5]], [10, [3], [7, 10, 7, 2], [0, 5]], 2]] to not be in the right order', () => {
  expect(
    compare(
      [
        [[], 2, 9, 4],
        [],
        [
          [[], [0]],
          [[7, 0, 10, 8], [10, 5, 5, 4, 1], 0, 6],
        ],
        [],
      ],
      [
        [
          [8],
          [3, 6, 9, [10, 4, 2], [4, 5]],
          [10, [3], [7, 10, 7, 2], [0, 5]],
          2,
        ],
      ]
    )
  ).toBe(false);
});
