const smallInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const bigInput = ``;

let moves = bigInput.split(/\n/).map((a) => a.split(' '));

const directions = {
  R: [1, 0],
  L: [-1, 0],
  U: [0, -1],
  D: [0, 1],
};

function solve(ropeLength) {
  let tailPositions = new Set();
  let rope = Array.from(
    {
      length: ropeLength,
    },
    () => [0, 0]
  );

  moves.map((move) => {
    let [direction, steps] = move;
    steps = +steps;

    for (let i = 0; i < steps; i++) {
      rope[0] = [
        rope[0][0] + directions[direction][0],
        rope[0][1] + directions[direction][1],
      ];
      for (let j = 1; j < ropeLength; j++) {
        let dx = rope[j - 1][0] - rope[j][0];
        let dy = rope[j - 1][1] - rope[j][1];
        if (Math.abs(dx) > 1) {
          rope[j][0] += dx > 0 ? 1 : -1;
          rope[j][01] -= Math.sign(dy);
        } else if (Math.abs(dy) > 1) {
          rope[j][1] += dy > 0 ? 1 : -1;
          rope[j][0] -= Math.sign(dx);
        }
      }
      tailPositions.add(rope[ropeLength - 1].join('-'));
    }
  });
  return tailPositions.size;
}

console.log(`Part 1: ${solve(2)}\nPart 2: ${solve(10)}\n`);
