const obj1 = {
    name: "Puneet",
    address: {
        city: "ghaziabad"
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1))

obj2.address.city = "Delhi"

console.log(obj1.address.city)