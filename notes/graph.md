# Graph

- Made up of Vertices and Edges
- Can either be a directed or undirected (2-way) graph

#### Adjacency List

Most common way to represent a graph.
In an undirected graph, vertices would be stored twice.

```js
{
  0: [1,2],
  1: [0],
  2: [3],
  3: [2,3],
  4: [0]
}
```

Graph can also be defined by classes

```js
class Graph {
  this.nodes = [];
}

class Node {
  this.value = "";
  this.children = [];
}
```

``` java
class Graph {
  public Node[] nodes;
}

class Node {
  public String name;
  public Node[] children;
}
```

#### Search

##### Depth-First Search (DFS)

``` java
void search(Node root) {
  if (root == null) return;
  visit(root);
  root.visited = true;
  for each (Node n in root.adjacent) {
    if (n.visited == false) {
      search(n);
    }
  }
}
```

##### Breadth-First Search (BFS)

``` java
void search(Node root) {
  Queue queue = new Queue();
  root.marked = true;
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    Node r = queue.dequeue();
    visit(r);

    foreach(Node n in r.adjacent) {
      if (n.marked == false) {
        n.marked = true;
        queue.enqueue(n);
      }
    }
  }
}
```
