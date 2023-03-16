const smallInput = `30373
25512
65332
33549
35390`;

const bigInput = ``;

const rows = smallInput.split(/\n/);
const alreadyVizible = (rows.length - 1 + rows[0].length - 1) * 2;
let visibleTrees = 0;

const isTreeVisibleFromTheTop = (tree, i, j) => {
  for (let x = 0; x < i; x++) {
    if (rows[x][j] >= tree) {
      return false;
    }
  }
  return true;
};

const isTreeVisibleFromTheBottom = (tree, i, j) => {
  for (let x = i + 1; x < rows.length; x++) {
    if (rows[x][j] >= tree) {
      return false;
    }
  }
  return true;
};

const isTreeVisibleFromTheLeft = (tree, i, j) => {
  for (let x = 0; x < j; x++) {
    if (rows[i][x] >= tree) {
      return false;
    }
  }
  return true;
};

const isTreeVisibleFromTheRight = (tree, i, j) => {
  for (let x = j + 1; x < rows[i].length; x++) {
    if (rows[i][x] >= tree) {
      return false;
    }
  }
  return true;
};

const isTreeVisible = (tree, i, j) => {
  if (isTreeVisibleFromTheTop(tree, i, j)) {
    return true;
  }
  if (isTreeVisibleFromTheBottom(tree, i, j)) {
    return true;
  }
  if (isTreeVisibleFromTheLeft(tree, i, j)) {
    return true;
  }
  if (isTreeVisibleFromTheRight(tree, i, j)) {
    return true;
  }
  return false;
};

for (let i = 1; i < rows.length - 1; i++) {
  for (let j = 1; j < rows[i].length - 1; j++) {
    const tree = rows[i][j];
    if (isTreeVisible(tree, i, j)) {
      console.log(tree);
      visibleTrees = visibleTrees + 1;
    }
  }
}

const totalVisible = visibleTrees + alreadyVizible;

console.log(totalVisible);
