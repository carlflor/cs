# Vertical Tree Traversal

(Link to Leetcode is not for free)

### Description
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).
If two nodes are in the same row and column, the order should be from left to right.

### Example
```
3
/\
/  \
9  20
 /\
/  \
15   7

output:
[
  [9],
  [3,15],
  [20],
  [7]
]
```

### Solution
```js
(function main() {

  const n1 = new TreeNode(1);
  const n2 = new TreeNode(2);
  const n3 = new TreeNode(3);
  const n4 = new TreeNode(4);
  const n5 = new TreeNode(5);
  const n6 = new TreeNode(6);
  const n7 = new TreeNode(7);
  const n8 = new TreeNode(8);
  const n9 = new TreeNode(9);

  n1.left = n2;
  n1.right = n3;
  n2.left = n6;
  n2.right = n4;
  n3.left = n5;
  n3.right = n8;
  n4.left = n7;
  n8.right = n9;

  console.log(verticalTraversal(n1));
}());

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function verticalTraversal(head) {
  const map = {};
  const levelQ = [];
  const nodeQ = [];
  let minLevel = 0;
  let maxLevel = 0;  
  levelQ.push(0);
  nodeQ.push(head);

  while(nodeQ.length > 0) {
    let level = levelQ.shift();
    let node = nodeQ.shift();

    if(map[level] == undefined) {
      map[level] = []
    }

    map[level].push(node.value);

    if(node.left) {
      nodeQ.push(node.left);
      const newLevel = level - 1;
      minLevel = Math.min(newLevel, minLevel)
      levelQ.push(newLevel);
    }

    if(node.right) {
      nodeQ.push(node.right);
      const newLevel = level + 1;
      maxLevel = Math.max(newLevel, maxLevel)
      levelQ.push(newLevel)
    }
  }

  const result = [];
  for(let i = minLevel; i <= maxLevel; i++) {
    result.push(map[i])
  }

  return result;
}
```
