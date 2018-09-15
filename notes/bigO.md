# BIG O
Reference: [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)

- In writing algorithms it is necessary to have some way to measure how efficient our code will run and how much memory/space it would take.
- We call this O(N) for Time and Space

### Key points to measure O(N)

#### 1. Different steps get added based on inputs.

This example returns O(A+B)
```
function(a,b) {
  doStep1() // O(A)
  doStep2() // O(B)
}
```

#### 2. Drop the constants

Big O describes the rate of increase, and so we don't have to consider constants in runtime. We just want to see of the algorithm scales linearly or quadratically.

In this example we might say it has a runtime of O(2N) as we iterate an array input twice, but in essence it's basically O(N)
```
function(array) {
  for each e in array         // O(N)
    minimum = MIN(e, array)
  for each e in array         // O(N)
    maximum = MAX(e, array)
}

function(array) {
  for each e in array         // O(N)
    minimum = MIN(e, array)
    maximum = MAX(e, array)
}
```

#### 3. Drop the non-dominant terms

Since we already drop the constants and we only want to see the efficiency of the algorithm at scale, N in O(N^2 + N) is unnecessary.
O(N^2 + N^2) is same as O(N^2)

O(B^2 + A) cannot be reduced without special knowledge of A and B however.

#### 4. Multi-part Algorithms: Add vs. Multiply

Add the runtimes if they are called separately: O(A+B)
```
function(arrayA,arrayB) {
  for a in arrayA
    print(A)

  for b in arrayB
    print(B)
}
```

Multiply the runtimes if they are nested: O(A*B)
```
function(arrayA,arrayB) {
  for a in arrayA
    for b in arrayB
      print(A + ',' + B)
}
```
#### 5. Amortized Time

The average time for an operation to finish. An algorithm may operate differently in worst case but if it only happens seldom, we can just take the runtime between best case and worst case

This can usually be seen in using arrays with dynamic size. The time it takes to double the size of array and clone the existing elements to the new array is somewhat ignored by the time you'd have to wait before increasing the size of array again.

#### 6. Log N Runtimes

O(logN) runtimes are usually seen in binary search. When each operation, N is halved therefor decreasing the number of times your algorithm runs.
When searching a value in a balanced binary tree, we just consider the half of N where the value is within range


#### 7. Recursive Runtimes

For recursive functions, it is important to take note of how the function branches out at one time. This example is O(2^N)
```
f(n) {
  if(n<=1) {
    return 1;
  }
  return f(n-1) + f(n-1)
}
```
Since each call, the method will be called twice, the number of operations is exponentially increasing.
Recursive functions may (but not always) look like this: O(branches ^ depth)
