// sum(display_to_console, 2, 1)

// function sum(callback, x, y){
//     let sum = x+y;
//     callback(sum)
// }

// function display_to_console(sum) {
//     console.log(sum)
// }

// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(double)
// numbers.forEach(triple)
// numbers.forEach(display_element)

// function triple(element, index, array) {
//     array[index] = element * 3
// }

// function double(element, index, array) {
//     array[index] = element * 2
// }

// function display_element(element) {
//     console.log(element)
// }

// const numbers = [1, 2, 3, 4, 5]

// const square_numbers = numbers.map(square)
// console.log(square_numbers)

// function square(elements) {
//     return elements * elements
// }

// const dates = ["2024-15-6", "2024-1-7", "2024-30-8"]
// const formatted_dates = dates.map(format_dates)
// console.log(formatted_dates)

// function format_dates(elements){
//     let parts = elements.split("-")
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }

// const numbers = [1, 2, 3, 4, 5]
// const square_numbers = numbers.map(function(element){
//     return element *element
// })

// console.log(square_numbers)

// let hello = (name, age) => {console.log(`Hello ${name}. You are ${age} years old`)}

// hello("Sanaullah", "18")

// const numbers = [1, 2, 3, 4, 5]
// const square_numebrs = numbers.map((element) => element * element)
// console.log(square_numebrs)

// const me = {
//     firstname : "Sanaullah",
//     lastname : "Yousaf",
//     update : function(){console.log("We are chilling")}
// }
// me.update()

// function car(make, model, year, color) {
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
// }

// const car1 = new car("Suzuki", "Mehran", "1998", "red")

// console.log(car1.make)
// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)

// class Product {
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }

//     display_product(){
//         console.log(`The product is: ${this.name}`)
//         console.log(`The price is ${this.price}`)
//     }
// }

// const product1 = new Product("Tshirt", 20.00)
// const product2 = new Product("Banana", 2.99)

// product1.display_product()
// product2.display_product()

// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2
//     }
//     static getCircumference(radius){
//         return 2*this.PI*radius
//     }
//     static getArea(radius){
//         return this.PI*radius*radius
//     }
// }

// console.log(MathUtil.getArea(10))

// class Users {
//     static userCount = 0;

//     constructor(username){
//         this.username = username
//         Users.userCount ++
//     }

// }

// user1 = new Users("Sanaullah")
// user2 = new Users("Abdullah")

// console.log(user1.username)
// console.log(Users.userCount)

// class Animals {
//     alive = true

//     eating(){
//         console.log(`The ${this.name} is Eating`)
//     }
//     sleep(){
//         console.log(`The ${this.name} is sleeping`)
//     }
// }

// class Rabbit extends Animals {
//     name = "Rabbit"
// }
// class Fish extends Animals {
//     name = "Fish"
//     canSwin = true
// }

// const rabbit = new Rabbit()
// const fish = new Fish()

// rabbit.eating()
// fish.eating()

class Animals {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    move(speed){
        console.log(`This ${this.name} moves at the speed of ${speed}`)
    }
}

class Rabbit extends Animals {
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}
class Fish extends Animals {
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hawk extends Animals {
    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit("Rabbit", 1, 25)
const fish = new Fish("Fish", 2, 15)
const hawk = new Hawk("Hawk", 3, 50)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)

rabbit.run()
fish.swim()
hawk.fly()