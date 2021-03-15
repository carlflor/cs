function shiftedBinarySearch(array, target) {
    console.log("target", target)
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const midpoint = Math.floor((start + end) / 2);
        if (array[midpoint] == target) return 1;

        if (array[start] <= array[midpoint]) {
            if (target < array[midpoint] && target >= array[start]) {
                end = midpoint - 1;
            } else {
                start = midpoint + 1;
            }
        } else {
            if (target > array[midpoint] && target <= array[end]) {
                start = midpoint + 1;
            } else {
                end = midpoint - 1;
            }
        }

    }

    return -1;
}

let array = [4,5,6,7,8,1,2,3]
for(let i = 0; i < array.length; i++) {
    console.log(shiftedBinarySearch(array, array[i]))
}

console.log(shiftedBinarySearch(array, 10))
console.log(shiftedBinarySearch(array, 0))