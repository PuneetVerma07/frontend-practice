let count = 1;

let timer = setInterval(function () {
    console.log(count)
    count++;
}, 1000)

setTimeout(function () {
    clearInterval(timer)
}, 5000);


