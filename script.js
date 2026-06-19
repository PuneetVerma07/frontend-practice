class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name}  kha rha hai...`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} bhonk rha hai`)
    }
}

const d = new Dog("tommy", "labrador")

console.log(d)
d.eat();
d.bark();

const d2 = new Dog("bruno", "jerman")
console.log(d2)

d2.eat();
d2.bark();