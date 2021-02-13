# Hash Tables

Hash Table is a very common data structure that keeps a key-value pair in its most basic terms.  In some languages, a key can by anything, but some force it to be a string. The value can refer to anything.

## Complexity

Insert - O(1) average, O(n) worst case
Delete - O(1) average, O(n) worst case
Lookup - O(1) average, O(n) worst case

## Under the hood

A common implementation of a hash table would be using a dynamic array of linked lists 

[
    0: (value1, key1) -> null
    1: (value2, key2) -> (value3, key3) -> (value4-> key4)
    2: (value5, key5) -> null
    3: null
    4: (value6, key6) -> (value7, key7) -> null
    5: (value8, key8) -> null
]

The keys are converted to a certain address in memory (to simplify, converted into an index) by using a hashing function. For exmaple, a key of "foo" is converted to an index "2" by using a hashing function. This function may utilize modulo to keep the value within the size of the array.

The value coming from the hashing function (an index) can be used to refer to a position on the array.

### Hash table collision
It's common that there will be collisions depending on the hashing function used. One solution to this is to use a linked list in each element in the array. This makes it on the worst case that most the values in the hash table are kept in the same linked list. With better hasing functions, it can minize collisions. Because of this, Hash tables still gets constant time for insertion delition and lookup on the average

### Managing space
If there are too many key-value pairs needed to fit in an array, the array can be configured to have dynamic scaling based on a certain threshold