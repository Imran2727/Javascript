// object -- > 

// property and method

// object literals

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    calBirthYear:function(){
        console.log(2022 - this.age)
    }
}
// .dot notation and bracket notation 

console.log(chinmay.firstName)
chinmay.age = 33
chinmay.city = "pune"
delete chinmay.city

console.log(chinmay['firstName'])
chinmay['age'] = 33
chinmay['city'] = "pune"
delete chinmay['city']
console.log(chinmay)

chinmay.calBirthYear()

chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    calBirthYear:function(){
        console.log(2022 - this.age)
    }
}

let amit = {
    firstName:"amit",
    lastName:"bhure",
    age:31,
    calBirthYear:function(){
        console.log(2022 - this.age)
    }
}
amit.calBirthYear()

// object literal
// Different ways to create object 

//1 object literal 
//2 function constructor
//3 Es6 class 
//4 Object.create()


// function constructor 

let Person = function(fn,ln){
    this.firstName = fn
    this.lastName = ln
}

let any = new Person("karl","marx")
console.log(any)

any.firstName = "kaal"
any.lastName = "mars"
console.log(any)

//let a = [1,4,5]

// function contructor
let Person2 = function(fn,ln,ag,rn,skills){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn 
    this.skills = skills
}
let thomas = new Person2("thomas","shelby",12,34,["python","java"])
let tom = new Person2("tom","hardy",23,34,["html","css"])
console.log(thomas)
console.log(tom)

thomas.age = 44
// method


Person2 = function(fn,ln,ag,rn,skills){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn 
    this.skills = skills
    this.numberSkills = function(){
        console.log(this.skills.length)
    }

}
let will = new Person2("will","smith",34,44,["python","javascript"])
let will1 = new Person2("will","smith2",30,40,["python3","javascript2"])
console.log(will.firstName)
console.log(will.lastName)
console.log(will.age)
console.log(will.rollNo)
console.log(will.skills)
will.numberSkills()
console.log(will)
console.log(will1)

console.log(will instanceof Person2)
console.log(will1 instanceof Person2)
console.log(will._proto_ === Person2.prototype)

// Object - property and method
// Object ---> _proto_
// _proto_ == parent.Protype