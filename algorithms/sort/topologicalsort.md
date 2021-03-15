# Topological Sort

Topological Sort can be used where there's a list of tasks, and some tasks might have a prerequisite task that should be done first. The result will return an array of an order at which the tasks can be done

Sample Input


``` js
// sample
const _jobs = [1,2,3,4]
const _deps = [[1,2], [1,3], [3,2], [4,2], [4,3]]

function topologicalSort(jobs, deps) {

    // create graph representation
    const graph = deps.reduce((acc, curr) => {
        const dep, task = curr;

    }, {})


    // traverse graph 
}


```