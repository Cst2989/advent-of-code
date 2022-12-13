const smallInput = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

const bigInput = ``;

const pairs = smallInput.split(/\r?\n/).filter((line) => line.trim() !== '');

let idx = 1;
let rightOrder = [];

const compare = (a, b) => {
  let totalLength = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < totalLength; i++) {
    if (!a[i] && (b[i] || b[i] === 0)) {
      return true;
    }
    if (!b[i] && (a[i] || a[i] === 0)) {
      return false;
    }
    if (typeof a[i] === typeof b[i]) {
      if (typeof a[i] === 'number') {
        if (a[i] < b[i]) {
          return true;
        } else if (a[i] > b[i]) {
          return false;
        }
      } else {
        let result = compare(a[i], b[i]);
        if (result !== 'end') {
          return result;
        }
      }
    } else {
      a[i] = typeof a[i] === 'number' ? [a[i]] : a[i];
      b[i] = typeof b[i] === 'number' ? [b[i]] : b[i];
      let result = compare(a[i], b[i]);
      if (result !== 'end') {
        return result;
      }
    }
  }
  return 'end';
};

for (let i = 0; i < pairs.length - 1; i = i + 2) {
  let leftPair = eval(pairs[i]);
  let rightPair = eval(pairs[i + 1]);
  if (compare(leftPair, rightPair) === true) {
    rightOrder.push(idx);
    console.log(compare(leftPair, rightPair));
  }
  idx++;
}

console.log(rightOrder.reduce((a, b) => a + b, 0));
module.exports = { compare };
