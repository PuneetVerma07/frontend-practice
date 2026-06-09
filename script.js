// call, apply and bind

/* call */

const user = {
    name: "Puneet"
}

function greet(age){
    console.log("Hello " + this.name + " , Age " + age)
}

greet.call(user, 22)

/* apply */

greet.apply(user, [22])

/* bind */

const boundFnc = greet.bind(user, 22)

boundFnc()

const person1 = {name: "Puneet"}
const person2 = {name: "Raghav"}

function greet2() {
    console.log("Hello ", this.name)
}

greet2.call(person1)
greet2.call(person2)
