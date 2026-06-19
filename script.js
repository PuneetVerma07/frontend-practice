/* Class */

class Person{
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi" + this.name;
    }
}

/* constructor function */

function Person2(name) {
    this.name = name;   
}

Person2.prototype.greet = function () {
    return "Hi" + this.name;
}

/* both are equal means behaviour 100% same */