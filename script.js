class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        console.log(this.first + " " + this.last)
    }

    set fullName(value) {
        let parts = value.split(" ")
        this.first = parts[0];
        this.last = parts[1];
    }
}

const p = new Person("Rahul", "Sharma")

console.log(p)
p.fullName

p.fullName = "Priya Verma"

p.fullName
console.log(p.first)