const smallInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;
const bigInput = ``;
const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
const ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const priority = ' ' + ascii_lowercase + ascii_uppercase;
const lines = bigInput.split(/\n/);

let totalPriority = 0;
lines.forEach((rucksack) => {
  for (let i = 0; i < rucksack.length / 2; i++) {
    let item = rucksack[i];
    if (rucksack.substr(rucksack.length / 2, rucksack.length).includes(item)) {
      let pr = priority.indexOf(item);
      totalPriority = totalPriority + pr;
      break;
    }
  }
});

console.log('part 1', totalPriority);

// PRT 2
const badgeItem = [];
let secondPriority = 0;
for (let i = 0; i <= lines.length + 1 / 3; i = i + 3) {
  const rucksack = lines[i].split('');
  rucksack.every((item) => {
    if (lines[i + 1].indexOf(item) > -1 && lines[i + 2].indexOf(item) > -1) {
      let pr = priority.indexOf(item);
      secondPriority = secondPriority + pr;
      return false;
    }
    return true;
  });
}

console.log('part 2', secondPriority);
