# Trees

### BINARY TREE

```js
function TreeNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function visit(node) {
  if (node) {
    console.log(node.value);
  }
}

// In-Order Traversal
// left - current - right

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    visit(node);
    inOrderTraversal(node.right);
  }
}

// Pre-Order Traversal
// current - left - right

function preOrderTraversal(node) {
  if (node) {
    visit(node);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// Post-Order Traversal

function postOrderTraversal(node) {
  if (node) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    visit(node);
  }
}
```
