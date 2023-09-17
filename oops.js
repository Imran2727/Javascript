// object literal

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:23
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:34
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    age:22,
    rollNo:33
}

// template , blue print ===> object by defining class
// setting the value outside the class

class Person {
    firstName= undefined
    lastName=undefined
    age=undefined
    rollNo= undefined
}

let amolA = new Person()
console.log(amolA)
amolA.firstName = "amolA "
amolA.lastName = "Rao"
amolA.age = 23
amolA.rollNo = 34
console.log(amolA)

// constructor are used to set the property value at the time of object creation
class Person2 {
    constructor(fn,ln,ag,rn){
        this.fullName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn

    }
}
let amol2 = new Person2("amolB","raoB",12,14)
let chinmay2 = new Person2("chinmayB","deshpandeB",22,12)

console.log(amol2)
console.log(chinmay2)

// by using set method

class Person3 {
    setAge(ag){
        this.age = ag
    }
    setRn(rn){
        this.rollNo = rn
    }
    setFirstName(fn){
        this.fullName = fn
    }
    setLastName(lang){
        this.lastName = lang
    }
}

let chinmay3 = new Person3()
console.log(chinmay3)
chinmay3.setAge(12)
chinmay3.setRn(23)
chinmay3.setLastName("deshpande")
chinmay3.setFirstName("chinmay4")
console.log(chinmay3)

// set Map
// class   

let carOne = {
    color:"red",
    name:"audi",
    type:"sedane"

}
let carTwo = {
    color:"red",
    name:"audi",
    type:"sedane"
}

// setting the value outside the class
class Car  {
    color =undefined
    name= undefined
    type= undefined
}
let audi = new Car()
let bmb = new Car()
console.log(typeof audi)
console.log(typeof bmb)

// audi ==>

audi.color ="red"
audi.name ="q3"
audi.type = "sedan"
console.log(audi)

//  class 


class Vehicle2 {
    constructor(clr,name,type){
        this.color = clr
        this.name = name
        this.type = type
    }
}

let audi1 = new Vehicle2("red","audi","sedane")
console.log(audi1)

// using set function

class Vehicle3 {

    setColor(cl){
        this.color = cl
    }
    setName(nm){
        this.name = nm
    }
    setType(type){
        this.type = type
    }

}

let audi3 = new Vehicle3()
console.log(audi3)
audi3.setColor("red")
audi3.setName('bmw')
audi3.setType('SUV')
console.log(audi3)

// let Car2 = class{

// }


// // update 
// obj.age = 34
// // retrive 
// console.log(obj.age)
// // delete 
// delete obj.age
// //add
// obj.lang = "Hindi"