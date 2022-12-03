// --- Day 4: Giant Squid ---
// You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.

// Maybe it wants to play bingo?

// Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)

// The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

// 7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

// 22 13 17 11  0
//  8  2 23  4 24
// 21  9 14 16  7
//  6 10  3 18  5
//  1 12 20 15 19

//  3 15  0  2 22
//  9 18 13 17  5
// 19  8  7 25 23
// 20 11 10 24  4
// 14 21 16 12  6

// 14 21 17 24  4
// 10 16 15  9 19
// 18  8 23 26 20
// 22 11 13  6  5
//  2  0 12  3  7
// After the first five numbers are drawn (7, 4, 9, 5, and 11), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// After the next six numbers are drawn (17, 23, 2, 0, 14, and 21), there are still no winners:

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// Finally, 24 is drawn:

// 22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
//  8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
// 21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
//  6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
//  1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
// At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: 14 21 17 24 4).

// The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

// To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?

const NumbersDrawn = [
  0,
  56,
  39,
  4,
  52,
  7,
  73,
  57,
  65,
  13,
  3,
  72,
  69,
  96,
  18,
  9,
  49,
  83,
  24,
  31,
  12,
  64,
  29,
  21,
  80,
  71,
  66,
  95,
  2,
  62,
  68,
  46,
  11,
  33,
  74,
  88,
  17,
  15,
  5,
  6,
  98,
  30,
  51,
  78,
  76,
  75,
  28,
  53,
  87,
  48,
  20,
  22,
  55,
  86,
  82,
  90,
  47,
  19,
  25,
  1,
  27,
  60,
  94,
  38,
  97,
  58,
  70,
  10,
  43,
  40,
  89,
  26,
  34,
  32,
  23,
  45,
  50,
  91,
  61,
  44,
  35,
  85,
  63,
  16,
  99,
  92,
  8,
  36,
  81,
  84,
  79,
  37,
  93,
  67,
  59,
  54,
  41,
  77,
  42,
  14,
];

const smallNumbers = [
  7,
  4,
  9,
  5,
  11,
  17,
  23,
  2,
  0,
  14,
  21,
  24,
  10,
  16,
  13,
  6,
  15,
  25,
  12,
  22,
  18,
  20,
  8,
  19,
  3,
  26,
  1,
];
const lineReader = require('line-reader');
const boards = [];
let board = {};
let i = 0;
lineReader.eachLine('day4-2021-small.txt', function (line) {
  if (line) {
    board[i] = line.split(' ').filter((nr) => nr);
    i++;
  } else {
    boards.push(board);
    i = 0;
    board = {};
  }
});
setTimeout(() => {
  //console.log(boards);
  startGame(boards, smallNumbers);
}, 500);

const startGame = (boards, numbers) => {
  let winningBoards = [];
  let score = 0;
  for (let i = 0; i < numbers.length; i++) {
    lastNumber = numbers[i - 1];
    number = numbers[i];
    if (boards.length) {
      markNumber(boards, number);
      const wBoards = checkForBingo(boards);
      console.log(wBoards);
      winningBoards = [...winningBoards, ...wBoards];
      boards = normalBoards(boards);
    } else {
      score = calculateScore(
        winningBoards[winningBoards.length - 1],
        lastNumber
      );
    }
    //console.log(winningBoards);
  }
};

const markNumber = (boards, number) => {
  boards.forEach((board) => {
    for (const boardLineIndex in board) {
      board[boardLineIndex].forEach((nr, nrIndex) => {
        if (parseInt(nr) === number) {
          board[boardLineIndex][nrIndex] = board[boardLineIndex][nrIndex] + 'x';
        }
      });
    }
  });
};
const normalBoards = (boards) => {
  return boards.filter((board) => {
    for (const boardLineIndex in board) {
      if (
        hasOrizontalBingoLine(board[boardLineIndex]) ||
        hasVerticalBingoLine(board)
      ) {
        return false;
      } else {
        return true;
      }
    }
  });
};
const checkForBingo = (boards) => {
  return boards.filter((board) => {
    for (const boardLineIndex in board) {
      if (
        hasOrizontalBingoLine(board[boardLineIndex]) ||
        hasVerticalBingoLine(board)
      ) {
        return true;
      } else {
        return false;
      }
    }
  });
};

const hasOrizontalBingoLine = (line) => {
  return line.every((nr) => nr.includes('x'));
};

const hasVerticalBingoLine = (board) => {
  for (let j = 0; j < 5; j++) {
    if (
      board[0][j].includes('x') &&
      board[1][j].includes('x') &&
      board[2][j].includes('x') &&
      board[3][j].includes('x') &&
      board[4][j].includes('x')
    ) {
      console.log('aci', j);
      return true;
    }
  }
  return false;
};

const calculateScore = (board, number) => {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!board[j][i].includes('x')) {
        sum = sum + parseInt(board[j][i]);
      }
    }
  }
  return sum * number;
};
