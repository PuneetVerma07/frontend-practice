function introduce(city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`)
}

const person = {
    name :"Rahul"
}

introduce.call(person, "Mumbai", "INDIA")

introduce.apply(person, ["Indore", "India"])

const boundFn = introduce.bind(person, "Agra", "India")
boundFn();

/* or */

const fn = introduce.bind(person)

fn("Ghaziabad", "India")

