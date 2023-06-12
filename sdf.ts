let promise = new Promise((resolve, reject) => {
    resolve({1: 2});
})

promise.then((data) => {console.log(data)})

promise.then(() => {})
