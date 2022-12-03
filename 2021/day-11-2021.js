const lineReader = require('line-reader');
const octopuses = {};
let flashes = 0;
let i = 0;
lineReader.eachLine('day-11-2021.txt', function (line) {
  octopuses[i] = Array.from(line).map((nr) => parseInt(nr));
  i++;
});
setTimeout(() => {
  part1(octopuses);
}, 500);

const increaseEnergy = (octopuses, rowIndex, columnIndex, alreadyFlashed) => {
  const energy = octopuses[rowIndex][columnIndex];
  if (energy < 9) {
    octopuses[rowIndex][columnIndex] = octopuses[rowIndex][columnIndex] + 1;
  } else {
    octopuses[rowIndex][columnIndex] = 0;
    if (!alreadyFlashed[rowIndex] || !alreadyFlashed[rowIndex][columnIndex]) {
      if (!alreadyFlashed[rowIndex]) {
        alreadyFlashed[rowIndex] = [];
      }
      alreadyFlashed[rowIndex][columnIndex] = 1;
      flashAction(octopuses, rowIndex, columnIndex, alreadyFlashed);
    }
  }
};

const flashAction = (octopuses, rowIndex, columnIndex, alreadyFlashed) => {
  flashes++;

  const leftNeighbour = octopuses[rowIndex][columnIndex - 1];
  if (leftNeighbour) {
    increaseEnergy(octopuses, rowIndex, columnIndex - 1, alreadyFlashed);
  }
  const rightNeighbour = octopuses[rowIndex][columnIndex + 1];
  if (rightNeighbour) {
    increaseEnergy(octopuses, rowIndex, columnIndex + 1, alreadyFlashed);
  }
  const topNeighbour = octopuses[rowIndex - 1]
    ? octopuses[rowIndex - 1][columnIndex]
    : null;
  if (topNeighbour) {
    increaseEnergy(octopuses, rowIndex - 1, columnIndex, alreadyFlashed);
  }
  const bottomNeghbour = octopuses[rowIndex + 1]
    ? octopuses[rowIndex + 1][columnIndex]
    : null;

  if (bottomNeghbour) {
    increaseEnergy(octopuses, rowIndex + 1, columnIndex, alreadyFlashed);
  }
  if (octopuses[rowIndex - 1] && octopuses[rowIndex - 1][columnIndex - 1]) {
    const topLeftNeighbour = octopuses[rowIndex - 1][columnIndex - 1];
    if (topLeftNeighbour) {
      increaseEnergy(octopuses, rowIndex - 1, columnIndex - 1, alreadyFlashed);
    }
  }
  if (octopuses[rowIndex - 1] && octopuses[rowIndex - 1][columnIndex + 1]) {
    const topRightNeighbour = octopuses[rowIndex - 1][columnIndex + 1];
    if (topRightNeighbour) {
      increaseEnergy(octopuses, rowIndex - 1, columnIndex + 1, alreadyFlashed);
    }
  }

  if (octopuses[rowIndex + 1] && octopuses[rowIndex + 1][columnIndex - 1]) {
    const bottomLeftNeighbour = octopuses[rowIndex + 1][columnIndex - 1];
    if (bottomLeftNeighbour) {
      increaseEnergy(octopuses, rowIndex + 1, columnIndex - 1, alreadyFlashed);
    }
  }

  if (octopuses[rowIndex + 1] && octopuses[rowIndex + 1][columnIndex + 1]) {
    const bottomRightNeighbour = octopuses[rowIndex + 1][columnIndex + 1];
    if (bottomRightNeighbour) {
      increaseEnergy(octopuses, rowIndex + 1, columnIndex + 1, alreadyFlashed);
    }
  }
};

const stepActions = (octopuses) => {
  let alreadyFlashed = {};
  for (let octoIndex in octopuses) {
    octopuses[octoIndex].forEach((energy, energyIndex) => {
      increaseEnergy(octopuses, octoIndex, energyIndex, alreadyFlashed);
    });
  }
};

const part1 = (octopuses) => {
  // for (let i = 0; i < 10; i++) {
  //   stepActions(octopuses);
  // }
  console.log(octopuses[0].join(''));
  stepActions(octopuses);
  console.log(octopuses[0].join(''));
  stepActions(octopuses);
  console.log(octopuses[0].join(''));
  //console.log(flashes);
};
