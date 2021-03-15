function hello() {
    console.log("hello")
}


const promise = new Promise((resolve, reject) => {
    hello();

    //resolve();
    reject();
}).then(() => {
    return {
        data: "success"
    }
}).catch(() => {
    return {
        message: "error"
    }
})


function doThis() {
    return promise
}

async function foo() {
    const res = await promise
    return res
}

foo()
    .then((res) => {
        console.log(window.black)
        console.log(res)
    })
    .catch((err) => {
        console.log("catch")
        console.log(err)
    });

window.black = "black";