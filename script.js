function greet(name) {
    console.log("Hello " + name)
}

function welcome(callback) {
    let user = "Rahul";
    callback(user)
}

welcome(greet);