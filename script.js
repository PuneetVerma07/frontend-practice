let arr = [ 1,2,3]

arr.forEach(function (num) {
    console.log(num * 2)
})

setTimeout(function(){console.log("excutes later")}, 3000)

setTimeout(function(){console.log("2 seconds later")}, 2000)

setTimeout(function () {
    console.log("Hello")
}, 0)

console.log("world")