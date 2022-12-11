let monkeys = {
  // Monkey 0:
  // Starting items: 85, 77, 77
  // Operation: new = old * 7
  // Test: divisible by 19
  //   If true: throw to monkey 6
  //   If false: throw to monkey 7
  0: {
    items: [85, 77, 77],
    inspected: 0,
    updateWorryLevel: (old) => old * 7,
    checkItem: (item) => {
      if (item % 19 === 0) {
        monkeys[6].items.push(item);
      } else {
        monkeys[7].items.push(item);
      }
    },
  },
  // Monkey 1:
  // Starting items: 80, 99
  // Operation: new = old * 11
  // Test: divisible by 3
  //   If true: throw to monkey 3
  //   If false: throw to monkey 5
  1: {
    items: [80, 99],
    inspected: 0,
    updateWorryLevel: (old) => old * 11,
    checkItem: (item) => {
      if (item % 3 === 0) {
        monkeys[3].items.push(item);
      } else {
        monkeys[5].items.push(item);
      }
    },
  },
  // Monkey 2:
  // Starting items: 74, 60, 74, 63, 86, 92, 80
  // Operation: new = old + 8
  // Test: divisible by 13
  //   If true: throw to monkey 0
  //   If false: throw to monkey 6
  2: {
    items: [74, 60, 74, 63, 86, 92, 80],
    inspected: 0,
    updateWorryLevel: (old) => old + 8,
    checkItem: (item) => {
      if (item % 13 === 0) {
        monkeys[0].items.push(item);
      } else {
        monkeys[6].items.push(item);
      }
    },
  },
  // Monkey 3:
  // Starting items: 71, 58, 93, 65, 80, 68, 54, 71
  // Operation: new = old + 7
  // Test: divisible by 7
  //   If true: throw to monkey 2
  //   If false: throw to monkey 4
  3: {
    items: [71, 58, 93, 65, 80, 68, 54, 71],
    inspected: 0,
    updateWorryLevel: (old) => old + 7,
    checkItem: (item) => {
      if (item % 7 === 0) {
        monkeys[2].items.push(item);
      } else {
        monkeys[4].items.push(item);
      }
    },
  },
  // Monkey 4:
  // Starting items: 97, 56, 79, 65, 58
  // Operation: new = old + 5
  // Test: divisible by 5
  //   If true: throw to monkey 2
  //   If false: throw to monkey 0

  4: {
    items: [97, 56, 79, 65, 58],
    inspected: 0,
    updateWorryLevel: (old) => old + 5,
    checkItem: (item) => {
      if (item % 5 === 0) {
        monkeys[2].items.push(item);
      } else {
        monkeys[0].items.push(item);
      }
    },
  },
  // Monkey 5:
  // Starting items: 77
  // Operation: new = old + 4
  // Test: divisible by 11
  //   If true: throw to monkey 4
  //   If false: throw to monkey 3
  5: {
    items: [77],
    inspected: 0,
    updateWorryLevel: (old) => old + 4,
    checkItem: (item) => {
      if (item % 11 === 0) {
        monkeys[4].items.push(item);
      } else {
        monkeys[3].items.push(item);
      }
    },
  },
  // Monkey 6:
  // Starting items: 99, 90, 84, 50
  // Operation: new = old * old
  // Test: divisible by 17
  //   If true: throw to monkey 7
  //   If false: throw to monkey 1
  6: {
    items: [99, 90, 84, 50],
    inspected: 0,
    updateWorryLevel: (old) => old * old,
    checkItem: (item) => {
      if (item % 17 === 0) {
        monkeys[7].items.push(item);
      } else {
        monkeys[1].items.push(item);
      }
    },
  },
  // Monkey 7:
  // Starting items: 50, 66, 61, 92, 64, 78
  // Operation: new = old + 3
  // Test: divisible by 2
  //   If true: throw to monkey 5
  //   If false: throw to monkey 1
  7: {
    items: [50, 66, 61, 92, 64, 78],
    inspected: 0,
    updateWorryLevel: (old) => old + 3,
    checkItem: (item) => {
      if (item % 2 === 0) {
        monkeys[5].items.push(item);
      } else {
        monkeys[1].items.push(item);
      }
    },
  },
};

let round = () => {
  let monkeyKeys = Object.keys(monkeys);
  monkeyKeys.forEach((mnk) => {
    monkeys[mnk].items.forEach((item) => {
      monkeys[mnk].inspected++;
      let worryLevel = monkeys[mnk].updateWorryLevel(item);
      worryLevel = Math.floor(worryLevel / 3);
      monkeys[mnk].checkItem(worryLevel);
    });
    monkeys[mnk].items = [];
  });
};
for (let i = 0; i < 20; i++) {
  round();
}

let inspected = [
  monkeys[0].inspected,
  monkeys[1].inspected,
  monkeys[2].inspected,
  monkeys[3].inspected,
  monkeys[4].inspected,
  monkeys[5].inspected,
  monkeys[6].inspected,
  monkeys[7].inspected,
].sort(function (a, b) {
  return b - a;
});

console.log(inspected[0] * inspected[1]);
