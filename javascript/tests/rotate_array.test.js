const rotateArray = require('../rotate_array');

function arrayToString(arr) {
  return JSON.stringify(arr);
}

test('can handle k values from 1 up to the length of the array', () => {
  expect(arrayToString(rotateArray([1, 2, 3, 4], 1))).toBe(arrayToString([4, 1, 2, 3]));
  expect(arrayToString(rotateArray([1, 2, 3], 2))).toBe(arrayToString([2, 3, 1]));
  expect(arrayToString(rotateArray([1, 2, 3], 3))).toBe(arrayToString([1, 2, 3]));
});
    
test('can handle an empty array', () => {
  expect(arrayToString(rotateArray([], 7))).toBe(arrayToString([]));
  expect(arrayToString(rotateArray([], 0))).toBe(arrayToString([]));
});
    
test('can handle a k value of 0', () => {
  expect(arrayToString(rotateArray([1, 2, 3], 0))).toBe(arrayToString([1, 2, 3]));
});
    
test('can handle k values larger than the array length', () => {
  expect(arrayToString(rotateArray([1, 2, 3], 5))).toBe(arrayToString([2, 3, 1]));
  expect(arrayToString(rotateArray([1, 2, 3], 6))).toBe(arrayToString([1, 2, 3]));
  expect(arrayToString(rotateArray([1, 2, 3, 4], 41))).toBe(arrayToString([4, 1, 2, 3]));
});
