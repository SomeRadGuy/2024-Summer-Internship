// function car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
// }

// const car1 = new car("Suzuki", "Mehran", 2006, "Red")

// console.log(car1.model)
// console.log(car1.make)

// class car {
//     static car_count = 0

//     constructor(make, model, year, color){
//         this.make = make
//         this.model = model
//         this.year = year
//         this.color = color
//         car.car_count ++
//     }
//     display(){
//         console.log(`The Make of this Car is: ${this.make}`)
//         console.log(`The Model of this Car is: ${this.model}`)
//         console.log(`The year of this Car is: ${this.year}`)
//         console.log(`The color of this Car is: ${this.color}`)
//     }
// }

// const car1 = new car("Suzuki", "Mehran", 1998, "Red")
// const car2 = new car("Suzuki", "Mehran", 2016, "Grey")
// car1.display()
// console.log(car.car_count)

// class Animals {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     move(speed){
//         console.log(`This ${this.name} is travling at the speed of ${speed}`)
//     }
// }

// class Rabbit extends Animals {
//     constructor(name, age, runSpeed){
//         super(name, age)
//         this.runSpeed = runSpeed
//     }
//     run(){
//         console.log(`This ${this.name} can run`)
//         super.move(this.runSpeed)
//     }
//     move(){
//         super.move(this.runSpeed)
//     }
// }

// class Fish extends Animals {
//     constructor(name, age, swimSpeed){
//         super(name, age)
//         this.swimSpeed = swimSpeed
//     }
//     swim(){
//         console.log(`This ${this.name} can swim`)
//     }
//     move(){
//         super.move(this.swimSpeed)
//     }
// }

// class Hawk extends Animals {
//     constructor(name, age, flySpeed){
//         super(name, age)
//         this.flySpeed = flySpeed
//     }
//     fly(){
//         console.log(`This ${this.name} can fly`)
//     }
//     move(){
//         super.move(this.flySpeed)
//     }
// }

// const rabbit = new Rabbit("Rabbit", 1, 10)
// const fish = new Fish("Fish", 2, 15)
// const hawk = new Hawk("Hawk", 3, 30)

// rabbit.move()
// fish.move()
// hawk.move()

// class Vehicals {
//     constructor(type, name, production_date){
//         this.type = type
//         this.name = name
//         this.production_date = production_date
//     }
//     display_information(speed){
//         console.log(`This is a ${this.type} and its name is ${this.name}. Its production started in ${this.production_date} and its movement speed is ${speed}`)
//     }
// }

// class Car extends Vehicals {
//     constructor(type, name, production_date, roll_speed){
//         super(type, name, production_date)
//         this.roll_speed = roll_speed
//     }
//     display_car(){
//         console.log(`This is a car with roll speed of ${this.production_date}`)
//     }
//     display_information_car(){
//         super.display_information(this.roll_speed)
//     }
// }

// const car1 = new Car("Car", "Buggatti", "1998", 500)

// car1.display_information_car()
// car1.display_car()

// class Person {
//     constructor(name, age, ...address){
//         this.name = name
//         this.age = age
//         this.address = new Address(...address)
//     }
// }



// class Address {
//     constructor(house, street, block, society){
//         this.house = house
//         this.street = street
//         this.block = block
//         this.society = society
//     }
// }

// const person1 = new Person("Sanaullah", 18, "House#5A", "Street#25A", "Block#H", "Soan Garden")
// const person2 = new Person("Abdullah", 25, "House#5A", "Street#25A", "Block#H", "Soan Garden")

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.address)
// console.log(person1.address.house)
// console.log(person1.address.street)
// console.log(person1.address.block)
// console.log(person1.address.society)

// const date = new Date()
// console.log(date)

// function counter(){
//     let count = 0;

//     function increment(){
//         count++
//         console.log(`Number incremented to ${count}`)
//     }
//     return{increment}
// }

// let counteroutput = counter()
// counteroutput.increment()
// counteroutput.increment()

// function function1(callback){
//     setTimeout(() => {console.log("Task 1")
//                       callback()}, 3000)
// }

// function function2(){
//     console.log("Task 2")
//     console.log("Task 3")
//     console.log("Task 4")

// }

// function1(function2)

try{
    console.log("Yello")
}catch(error){
    console.log(error)
}finally {
    console.log("Closing Files")
}