const smallInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

// This list represents the Calories of the food carried by five Elves:

// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
// The second Elf is carrying one food item with 4000 Calories.
// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
// The fifth Elf is carrying one food item with 10000 Calories.
// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

const lines = smallInput.split(/\n/);
let currentElfCalories = 0;
let totalCaloriesByElf = 0;

lines.forEach((foodItem) => {
  if (foodItem) {
    currentElfCalories = currentElfCalories + parseInt(foodItem);
  } else {
    totalCaloriesByElf =
      currentElfCalories > totalCaloriesByElf
        ? currentElfCalories
        : totalCaloriesByElf;

    currentElfCalories = 0;
  }
});

// console.log(totalCaloriesByElf);

// PART 2

// To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

// In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

let topThreeCaloriesElves = {
  1: 0,
  2: 0,
  3: 0,
};

currentElfCalories = 0;

lines.forEach((foodItem) => {
  if (foodItem) {
    currentElfCalories = currentElfCalories + parseInt(foodItem);
  } else {
    if (currentElfCalories > topThreeCaloriesElves['1']) {
      topThreeCaloriesElves['3'] = topThreeCaloriesElves['2'];
      topThreeCaloriesElves['2'] = topThreeCaloriesElves['1'];
      topThreeCaloriesElves['1'] = currentElfCalories;
    } else if (currentElfCalories > topThreeCaloriesElves['2']) {
      topThreeCaloriesElves['3'] = topThreeCaloriesElves['2'];
      topThreeCaloriesElves['2'] = currentElfCalories;
    } else if (currentElfCalories > topThreeCaloriesElves['3']) {
      topThreeCaloriesElves['3'] = currentElfCalories;
    }

    currentElfCalories = 0;
  }
});

const sum =
  topThreeCaloriesElves['3'] +
  topThreeCaloriesElves['2'] +
  topThreeCaloriesElves['1'];
console.log(sum);
