const smallInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const bigInput = ``;

const limit = 100000;

const lines = bigInput.split(/\n/);
let directoryStructure = {
  root: {},
  parent: null,
  name: 'root',
  totalSize: 0,
};
let curentDirectory = 'root';

const findDirectoryByName = (structure) => {
  let obj = directoryStructure;
  while (structure.length) {
    let element = structure.shift();
    if (element === 'root') {
      obj = directoryStructure;
    } else {
      obj = obj.root[element];
    }
  }
  return obj;
};

const updateTotalToParent = (obj, valueToAdd) => {
  if (obj.parent) {
    obj.parent.totalSize = obj.parent.totalSize + parseInt(valueToAdd);
    updateTotalToParent(obj.parent, valueToAdd);
  }
};
const listCommand = (idx) => {
  for (let i = idx; i < lines.length; i++) {
    let terminalLine = lines[i];
    if (terminalLine.includes('$')) {
      break;
    }
    let structure = curentDirectory.split('/');
    let curentDirectoryObject = findDirectoryByName(structure);
    if (terminalLine.includes('dir')) {
      const dirName = terminalLine.substring(4);
      // root/test/
      let emptyDirectory = {
        root: {},
        parent: curentDirectoryObject,
        name: dirName,
        totalSize: 0,
      };
      curentDirectoryObject.root[dirName] = Object.assign(emptyDirectory);
    } else {
      const file = terminalLine.split(' ');
      curentDirectoryObject.totalSize =
        curentDirectoryObject.totalSize + parseInt(file[0]);
      if (curentDirectoryObject.name !== 'root') {
        // add to all parents
        updateTotalToParent(curentDirectoryObject, file[0]);
      }
    }
  }
};

let totalSize = 0;

const changeDirectory = (directory) => {
  if (directory === '/') {
    curentDirectory = 'root';
  } else if (directory === '..') {
    let arr = curentDirectory.split('/');
    arr.pop();
    curentDirectory = arr.join('/');
  } else {
    curentDirectory = curentDirectory + '/' + directory;
  }
};
lines.forEach((line, index) => {
  if (line.includes('$ ls')) {
    listCommand(index + 1);
  }
  if (line.includes('cd ')) {
    let changeDirectoryCommand = line.split(' ');
    changeDirectory(changeDirectoryCommand[2]);
  }
});

const addLimitFoldersSize = (arrOfDirectories) => {
  arrOfDirectories.forEach((dir) => {
    if (dir.totalSize < limit) {
      totalSize = totalSize + parseInt(dir.totalSize);
    }
    const directories = Object.values(dir.root);
    if (directories.length) {
      addLimitFoldersSize(directories);
    }
  });
};
const directories = Object.values(directoryStructure.root);

addLimitFoldersSize(directories);
console.log(directoryStructure);
console.log(totalSize);
