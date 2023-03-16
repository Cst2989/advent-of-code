const airports = 'PHX OKC NY LAX'.split(' ');
const routes = [
  ['PHX', 'NY'],
  ['LAX', 'OKC'],
  ['NY', 'LAX'],
];

const adjancecyList = new Map();

function addNode(node) {
  adjancecyList.set(node, []);
}

function addEdge(parent, child) {
  adjancecyList.get(parent).push(child);
  adjancecyList.get(child).push(parent);
}

// Create the graph

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// Graph traversal

// BFS breadth first search

function bfs(start, searchItem) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    const childNodes = adjancecyList.get(node);
    for (const child of childNodes) {
      if (child === searchItem) {
        console.log('found it');
        return child;
      }
      if (!visited.has(child)) {
        visited.add(child);
        queue.push(child);
      }
    }
  }
}

// DFS Depth First Search
let steps = 0;
function dfs(start, visited = new Set(), searchItem) {
  console.log(start);
  visited.add(start);
  steps++;
  const childNodes = adjancecyList.get(start);
  for (const child of childNodes) {
    if (child === searchItem) {
      console.log(`${searchItem} found in ${steps} steps`);
      return child;
    }
    if (!visited.has(child)) {
      dfs(child, visited, searchItem);
    }
  }
}
