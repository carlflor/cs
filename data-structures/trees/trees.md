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

### BINARY SEARCH TREE ES6 IMPLEMENTATION

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor()
  {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    } else {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //delete node with two children
      //replace node with the min of the right subtree
      const tempNode = this.findMinNode(node.right);
      node.data = tempNode.data;

      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
  }

  // helper functions
  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  findMaxNode(node) {
    if (node.right === null)
      return node;
    else
      return this.findMaxNode(node.right);
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  findSuccessor(node) {
    if (node == null)
      return null;

    if (node.right != null)
      return findMinNode(node.right);

    // if right subtree is null, find from root
    let pointer = this.root;
    let succ = null;
    while(pointer) {
      if(node.data < pointer.data) {
        succ = pointer;
        pointer = pointer.left;
      } else if (node.data > pointer.data) {
        pointer = pointer.right;
      } else {
        break;
      }
    }

    return succ;
  }

  findPredecessor(node) {
    if (node == null)
      return null;

    if (node.left != null)
      return findMaxNode(node.left);

    let pointer = this.root;
    let pre = null;

    while(pointer) {
      if (node.data > pointer.data) {
        pre = pointer;
        pointer = pointer.right;
      } else if (node.data < pointer.data) {
        pointer = pointer.left;
      } else {
        break;
      }
    }

    return pre;
  }

  isBST(root, left, right) {
    if (root == null) {
      return true;
    }

    if (left != null && (root.val < left.val || root.val == left.val))
      return false;

    if (right != null && (root.val > right.val || root.val == right.val))
      return false;

    return isBST(root.left, left, root) &&
            isBST(root.right, root, right);
  }
}
```
