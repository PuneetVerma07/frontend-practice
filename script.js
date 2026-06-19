const animal = {
    eats: true,
    walk() {
        console.log("animal chal rha hai");
    },
}

const dog = Object.create(animal)

dog.bark = true

console.log(dog.eats)
console.log(dog.bark)
dog.walk();