const smallInput = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const bigInput = `    [P]                 [C] [C]
    [W]         [B]     [G] [V] [V]
    [V]         [T] [Z] [J] [T] [S]
    [D] [L]     [Q] [F] [Z] [W] [R]
    [C] [N] [R] [H] [L] [Q] [F] [G]
[F] [M] [Z] [H] [G] [W] [L] [R] [H]
[R] [H] [M] [C] [P] [C] [V] [N] [W]
[W] [T] [P] [J] [C] [G] [W] [P] [J]
1   2   3   4   5   6   7   8   9

move 2 from 4 to 9
move 5 from 2 to 9
move 1 from 5 to 1
move 3 from 1 to 4
move 2 from 4 to 6
move 7 from 6 to 9
move 5 from 3 to 9
move 1 from 8 to 6
move 3 from 2 to 3
move 12 from 9 to 3
move 4 from 9 to 7
move 15 from 3 to 9
move 1 from 1 to 5
move 2 from 6 to 5
move 18 from 9 to 1
move 6 from 8 to 1
move 1 from 8 to 7
move 5 from 7 to 2
move 6 from 1 to 2
move 7 from 9 to 6
move 6 from 1 to 3
move 5 from 3 to 9
move 3 from 9 to 1
move 1 from 7 to 9
move 4 from 2 to 1
move 5 from 6 to 3
move 1 from 3 to 4
move 1 from 5 to 9
move 2 from 9 to 6
move 5 from 5 to 9
move 10 from 1 to 8
move 4 from 3 to 8
move 3 from 4 to 9
move 4 from 6 to 9
move 14 from 8 to 6
move 1 from 3 to 8
move 14 from 9 to 4
move 6 from 1 to 6
move 1 from 8 to 2
move 3 from 5 to 8
move 1 from 8 to 9
move 1 from 8 to 1
move 5 from 4 to 9
move 1 from 8 to 4
move 3 from 9 to 4
move 3 from 7 to 5
move 7 from 6 to 3
move 7 from 4 to 1
move 3 from 9 to 1
move 7 from 2 to 3
move 1 from 4 to 8
move 8 from 6 to 2
move 2 from 7 to 4
move 1 from 7 to 4
move 1 from 7 to 9
move 1 from 5 to 9
move 1 from 9 to 4
move 1 from 4 to 2
move 8 from 4 to 9
move 1 from 4 to 2
move 5 from 9 to 4
move 2 from 6 to 9
move 1 from 6 to 9
move 1 from 8 to 1
move 13 from 3 to 2
move 1 from 3 to 9
move 2 from 6 to 8
move 1 from 8 to 1
move 14 from 1 to 7
move 4 from 2 to 1
move 2 from 9 to 5
move 3 from 9 to 7
move 1 from 8 to 2
move 4 from 1 to 5
move 1 from 4 to 7
move 3 from 9 to 1
move 7 from 7 to 4
move 14 from 2 to 8
move 3 from 1 to 7
move 3 from 5 to 4
move 2 from 1 to 9
move 11 from 8 to 9
move 3 from 7 to 8
move 3 from 8 to 6
move 6 from 4 to 3
move 2 from 6 to 8
move 8 from 4 to 3
move 3 from 8 to 7
move 2 from 8 to 2
move 2 from 3 to 9
move 1 from 6 to 8
move 5 from 2 to 7
move 10 from 9 to 7
move 1 from 8 to 5
move 3 from 5 to 2
move 6 from 7 to 5
move 19 from 7 to 3
move 9 from 5 to 9
move 6 from 2 to 6
move 2 from 7 to 3
move 29 from 3 to 8
move 2 from 7 to 9
move 5 from 8 to 1
move 12 from 9 to 6
move 1 from 3 to 8
move 1 from 2 to 7
move 1 from 3 to 1
move 10 from 6 to 1
move 1 from 6 to 7
move 9 from 1 to 9
move 2 from 1 to 2
move 12 from 9 to 4
move 7 from 6 to 3
move 8 from 3 to 7
move 5 from 7 to 6
move 19 from 8 to 3
move 10 from 4 to 6
move 1 from 4 to 6
move 6 from 8 to 6
move 1 from 4 to 2
move 6 from 6 to 3
move 3 from 2 to 7
move 13 from 6 to 3
move 1 from 9 to 1
move 6 from 1 to 8
move 1 from 6 to 5
move 1 from 5 to 4
move 3 from 7 to 1
move 2 from 1 to 3
move 11 from 3 to 8
move 1 from 4 to 3
move 3 from 8 to 4
move 1 from 7 to 5
move 3 from 8 to 9
move 2 from 9 to 2
move 7 from 8 to 3
move 1 from 7 to 9
move 1 from 1 to 4
move 32 from 3 to 4
move 1 from 5 to 9
move 2 from 8 to 3
move 2 from 6 to 4
move 1 from 9 to 4
move 1 from 9 to 2
move 3 from 3 to 1
move 1 from 8 to 6
move 1 from 6 to 2
move 1 from 9 to 3
move 1 from 1 to 7
move 1 from 8 to 7
move 2 from 3 to 8
move 1 from 8 to 4
move 1 from 1 to 2
move 2 from 4 to 8
move 1 from 1 to 8
move 26 from 4 to 6
move 3 from 8 to 5
move 3 from 7 to 6
move 7 from 6 to 3
move 18 from 6 to 8
move 16 from 8 to 9
move 1 from 5 to 1
move 2 from 8 to 3
move 3 from 9 to 8
move 3 from 6 to 4
move 2 from 5 to 4
move 1 from 6 to 4
move 2 from 7 to 2
move 2 from 3 to 9
move 4 from 8 to 3
move 1 from 1 to 2
move 6 from 9 to 7
move 2 from 2 to 5
move 12 from 3 to 1
move 9 from 9 to 2
move 10 from 1 to 3
move 2 from 5 to 9
move 8 from 4 to 7
move 13 from 7 to 6
move 6 from 6 to 5
move 4 from 5 to 3
move 2 from 5 to 4
move 8 from 4 to 3
move 1 from 7 to 2
move 15 from 2 to 7
move 8 from 3 to 7
move 1 from 1 to 6
move 7 from 7 to 1
move 5 from 1 to 6
move 7 from 3 to 2
move 3 from 1 to 6
move 12 from 7 to 9
move 12 from 9 to 8
move 1 from 7 to 1
move 2 from 9 to 5
move 1 from 1 to 9
move 4 from 4 to 2
move 4 from 8 to 4
move 2 from 7 to 2
move 4 from 6 to 5
move 4 from 8 to 9
move 1 from 8 to 4
move 5 from 5 to 3
move 5 from 2 to 4
move 5 from 9 to 5
move 1 from 3 to 6
move 1 from 7 to 8
move 12 from 3 to 9
move 4 from 2 to 6
move 7 from 4 to 9
move 13 from 6 to 4
move 3 from 6 to 9
move 4 from 4 to 2
move 1 from 3 to 4
move 21 from 9 to 7
move 4 from 2 to 1
move 3 from 5 to 4
move 8 from 7 to 6
move 2 from 7 to 2
move 11 from 4 to 2
move 1 from 9 to 7
move 1 from 5 to 7
move 1 from 1 to 8
move 5 from 2 to 5
move 1 from 3 to 5
move 2 from 4 to 9
move 3 from 4 to 8
move 3 from 1 to 8
move 1 from 9 to 6
move 8 from 7 to 8
move 9 from 6 to 5
move 1 from 9 to 6
move 1 from 6 to 4
move 3 from 7 to 5
move 1 from 6 to 9
move 12 from 5 to 1
move 2 from 5 to 8
move 1 from 9 to 6
move 2 from 7 to 6
move 9 from 1 to 8
move 1 from 6 to 9
move 1 from 9 to 2
move 1 from 4 to 2
move 2 from 6 to 7
move 5 from 8 to 3
move 2 from 7 to 4
move 16 from 8 to 5
move 2 from 3 to 8
move 7 from 5 to 1
move 3 from 3 to 8
move 7 from 5 to 7
move 4 from 5 to 2
move 6 from 7 to 9
move 2 from 9 to 6
move 2 from 9 to 2
move 1 from 6 to 8
move 12 from 2 to 6
move 2 from 9 to 6
move 1 from 5 to 2
move 3 from 5 to 4
move 9 from 2 to 6
move 6 from 8 to 3
move 1 from 7 to 5
move 1 from 6 to 7
move 1 from 7 to 8
move 1 from 5 to 8
move 5 from 1 to 2
move 3 from 4 to 5
move 4 from 6 to 8
move 5 from 2 to 9
move 5 from 8 to 4
move 1 from 1 to 4
move 9 from 8 to 4
move 1 from 2 to 3
move 3 from 6 to 8
move 4 from 9 to 2
move 2 from 6 to 4
move 2 from 3 to 1
move 4 from 4 to 7
move 6 from 4 to 5
move 10 from 6 to 8
move 4 from 1 to 9
move 4 from 7 to 5
move 3 from 3 to 9
move 6 from 9 to 8
move 2 from 2 to 9
move 8 from 4 to 3
move 2 from 2 to 7
move 1 from 4 to 9
move 6 from 3 to 8
move 2 from 7 to 8
move 6 from 5 to 9
move 5 from 5 to 6
move 2 from 5 to 9
move 7 from 9 to 5
move 2 from 1 to 9
move 6 from 5 to 8
move 1 from 5 to 1
move 2 from 3 to 6
move 1 from 3 to 6
move 4 from 9 to 5
move 1 from 3 to 4
move 1 from 1 to 2
move 1 from 2 to 1
move 1 from 6 to 8
move 14 from 8 to 5
move 6 from 5 to 1
move 16 from 8 to 3
move 2 from 8 to 2
move 10 from 6 to 7
move 1 from 6 to 9
move 2 from 2 to 9
move 2 from 7 to 3
move 1 from 8 to 5
move 3 from 9 to 1
move 4 from 9 to 5
move 9 from 3 to 8
move 2 from 3 to 6
move 5 from 3 to 8
move 1 from 4 to 2
move 12 from 8 to 4
move 1 from 8 to 9
move 4 from 5 to 9
move 7 from 7 to 1
move 10 from 5 to 2
move 2 from 5 to 2
move 1 from 6 to 5
move 2 from 5 to 2
move 5 from 2 to 6
move 4 from 9 to 6
move 6 from 4 to 9
move 2 from 3 to 4
move 6 from 4 to 7
move 6 from 7 to 5
move 10 from 1 to 5
move 4 from 1 to 2
move 4 from 6 to 3
move 6 from 9 to 7
move 2 from 4 to 9
move 7 from 7 to 6
move 1 from 9 to 7
move 2 from 9 to 8
move 2 from 8 to 2
move 1 from 2 to 5
move 3 from 8 to 4
move 4 from 2 to 7
move 3 from 4 to 7
move 2 from 3 to 5
move 2 from 3 to 2
move 18 from 5 to 3
move 6 from 3 to 1
move 8 from 3 to 1
move 8 from 7 to 9
move 9 from 2 to 5
move 3 from 2 to 3
move 7 from 3 to 7
move 3 from 6 to 4
move 1 from 7 to 1
move 7 from 6 to 7
move 1 from 2 to 9
move 1 from 4 to 2
move 13 from 7 to 2
move 10 from 5 to 3
move 1 from 2 to 9
move 7 from 1 to 5
move 8 from 9 to 5
move 1 from 9 to 5
move 1 from 9 to 8
move 1 from 8 to 2
move 8 from 5 to 3
move 18 from 3 to 5
move 2 from 4 to 1
move 3 from 2 to 5
move 27 from 5 to 1
move 17 from 1 to 5
move 2 from 2 to 3
move 1 from 6 to 5
move 2 from 2 to 5
move 1 from 6 to 4
move 1 from 6 to 9
move 2 from 3 to 5
move 17 from 5 to 6
move 1 from 9 to 3
move 6 from 2 to 4
move 1 from 3 to 2
move 3 from 4 to 9
move 1 from 2 to 9
move 1 from 4 to 7
move 3 from 5 to 2
move 2 from 5 to 1
move 1 from 5 to 2
move 1 from 7 to 3
move 18 from 1 to 4
move 1 from 3 to 1
move 5 from 4 to 2
move 1 from 5 to 1
move 9 from 2 to 7
move 1 from 4 to 5
move 1 from 2 to 9
move 8 from 6 to 2
move 13 from 4 to 2
move 2 from 4 to 9
move 1 from 5 to 2
move 1 from 6 to 8
move 6 from 7 to 5
move 1 from 8 to 4
move 1 from 7 to 6
move 1 from 6 to 1
move 7 from 6 to 5
move 1 from 7 to 9
move 6 from 9 to 3
move 2 from 9 to 7
move 2 from 5 to 7
move 4 from 7 to 8
move 4 from 5 to 4
move 1 from 6 to 7
move 3 from 3 to 8
move 6 from 5 to 9
move 2 from 3 to 5
move 4 from 4 to 7
move 1 from 3 to 1
move 2 from 2 to 3
move 6 from 9 to 6
move 1 from 7 to 1
move 19 from 2 to 4
move 2 from 5 to 6
move 2 from 8 to 9
move 2 from 1 to 2
move 2 from 2 to 5
move 2 from 4 to 3
move 4 from 6 to 2
move 1 from 7 to 8
move 6 from 1 to 8
move 3 from 5 to 1
move 5 from 2 to 5
move 1 from 6 to 7
move 9 from 8 to 1
move 2 from 3 to 6
move 4 from 6 to 5
move 1 from 6 to 2
move 9 from 5 to 2
move 3 from 4 to 6
move 12 from 4 to 6
move 1 from 9 to 4
move 1 from 3 to 1
move 3 from 4 to 8
move 1 from 3 to 6
move 6 from 6 to 2
move 1 from 4 to 5
move 3 from 6 to 2
move 4 from 1 to 5
move 1 from 5 to 1
move 2 from 8 to 9
move 7 from 6 to 3
move 1 from 3 to 1
move 1 from 8 to 1
move 3 from 8 to 9
move 4 from 3 to 5
move 3 from 7 to 3
move 5 from 3 to 7
move 1 from 9 to 1
move 4 from 9 to 2
move 15 from 2 to 7
move 14 from 1 to 7
move 5 from 5 to 1
move 9 from 7 to 2
move 1 from 9 to 6
move 1 from 7 to 4
move 1 from 4 to 6
move 2 from 6 to 2
move 9 from 2 to 5
move 4 from 2 to 4
move 4 from 7 to 5
move 6 from 5 to 9
move 7 from 1 to 8
move 6 from 2 to 8
move 1 from 1 to 2
move 3 from 9 to 5
move 18 from 7 to 8
move 2 from 4 to 6
move 2 from 4 to 6
move 3 from 7 to 6
move 3 from 5 to 3
move 1 from 2 to 6
move 5 from 6 to 8
move 29 from 8 to 1
move 2 from 3 to 5
move 25 from 1 to 6
move 2 from 9 to 5
move 1 from 7 to 8
move 6 from 8 to 2
move 1 from 9 to 1
move 15 from 6 to 8
move 1 from 3 to 8
move 14 from 8 to 7
move 5 from 1 to 3
move 1 from 6 to 2
move 2 from 5 to 7
move 10 from 6 to 2
move 4 from 5 to 7
move 6 from 5 to 1
move 2 from 1 to 4
move 19 from 7 to 9`;

const lines = bigInput.split(/\n/);

let stacks = [];
const comands = [];
let stacksFinished = false;

lines.forEach((line) => {
  if (line && !stacksFinished) {
    stacks.push(line);
  } else if (line && stacksFinished) {
    comands.push(line);
  } else {
    stacksFinished = true;
  }
});

const nrOfColumns = stacks.pop().length;
const columns = {};

stacks.forEach((stack) => {
  for (let i = 0; i < stack.length; i++) {
    const char = stack[i];
    if (char === '[') {
      let item = stack.substr(i, 3);
      let nr = i + 1; // 5 -> 2 // 1 -> 1 // 9 --> 3 // 13
      let column = Math.ceil(nr / 4);
      if (!columns[column]) {
        columns[column] = [];
      }
      columns[column] = [...columns[column], item];
    }
  }
});

comands.forEach((comandLine) => {
  const orders = comandLine.split(' ');
  const nrOfElements = parseInt(orders[1]);
  const from = orders[3];
  const to = orders[5];
  const elements = columns[from].splice(0, nrOfElements);
  columns[to] = [...elements, ...columns[to]];
});

let part2Code = '';
console.log(columns);

Object.values(columns).forEach((column) => {
  part2Code = part2Code + column[0][1];
});

console.log(part2Code);
