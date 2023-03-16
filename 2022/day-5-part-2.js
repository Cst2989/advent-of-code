const smallInput = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const bigInput = ``;

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

let code = '';
console.log(columns);

Object.values(columns).forEach((column) => {
  code = code + column[0][1];
});

console.log(code);
