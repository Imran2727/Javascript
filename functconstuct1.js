
let ramOne = {
    fullname: "ram prasad",
    age: 34,
    city: "pune",
    skills: ["python", "javascript"]

}

let ramTwo = {
    fullname: "ram2 prasad",
    age: 32,
    city: "pune",
    skills: ["python3", "javascript", "html"]

}
// function constructor 
// es6 class 
// Object create 


let Person5 = function(fn,ag,cy,sks){
    this.fullname = fn
    this.age = ag 
    this.city = cy
    this.skills = sks
}

let ram3 = new Person5("ram3 prasad",33,"pune",["css","java","ruby"])
let ram4 = new Person5("ram4 prasad",34,"pune",["css3","javascript","rails"])

console.log(ram3)
console.log(ram4)

// object ---- property and method  


// program 2 


// let Vehicle =  function(color,regNo,city,type){
//     this.color = color
//     this.regNo = regNo
//     this.city = city 
//     this.type = type
//     this.colorDisplay = function(){
//         console.log(`Car's color is ${this.color} `)
//     }
// }

// let audi  = new Vehicle('red',"123","pune","sedane")
// let bwm  = new Vehicle('black',"678","banglore","SUV")

// console.log(audi)
// console.log(bwm)

// // Object ===> 
// //syntax ==> obj._proto_  ===> parent.protype
// console.log(audi._proto_ === Vehicle.prototype)
// console.log(audi instanceof Vehicle)

// solution

let Vehicle =  function(color,regNo,city,type){
    this.color = color
    this.regNo = regNo
    this.city = city 
    this.type = type
    // this.displayColor = function(){
    //     console.log(this.color)
    // }
}

Vehicle.prototype.displayColor = function(){
    console.log(this.color)
}
let audi  = new Vehicle('red',"123","pune","sedane")
let bwm  = new Vehicle('black',"678","banglore","SUV")

console.log(audi)
console.log(bwm)

audi.displayColor()
bwm.displayColor()


// obj ---->  obj._proto_ === parent.prototype
// prototype inheritance 
//audi._proto_ === Vehicle.prototype
// console.log(audi)
console.log(Vehicle.prototype)

// Array 

let names = ["chinmay","ram","sham","satish"]
let city = ["pune","nagpur","kolkata","banglore"]

// Array
console.log(names.pop())
console.log(city)
console.log(names._proto_ === Array.prototype)
names._proto_.dis = function(){
    console.log('hello')
}
// names.dis()
// console.log(names._proto_ === Array.prototype)
// console.log(Array.prototype)
// function constructor 

let Animal = function(name,legs){
    this.name = name 
    this.legs = legs
}
Animal.prototype.color = function(){
    console.log('black')
}
Animal.prototype.country = "India"

let tiger = new  Animal("tiger",4)
let spider = new  Animal("spider",8)

console.log(tiger.hasOwnProperty('name'))
console.log(tiger.hasOwnProperty('country'))

console.log(tiger)
console.log(spider)
console.log(tiger.country)
console.log(spider.country)

console.log(tiger.hasOwnProperty('name'))
console.log(tiger.hasOwnProperty('country'))
// Function constructor 


