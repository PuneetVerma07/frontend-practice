function Person(name) {
    this.name = name;
}

const p = new Person("rahul")

console.log((p.__proto__ === Person.prototype))

