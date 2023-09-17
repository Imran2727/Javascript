// function Es6 class

let Person =  function(fn,age,rolNo){
    this.fullName = fn 
    this.age = age
    this.rolNo = rolNo
}
Person.prototype.displayName = function(){
    console.log(this.fullName)
}
let imran = new Person("Imran shaikh",26,27)
console.log(imran)
console.log(imran.age)
console.log(imran['age'])
imran.displayName()

// Es6 class
console.log(imran)
class Person1 {
    constructor(fn,age,rollNo){
        this.fullName = fn 
        this.age = age 
        this.rollNo = rollNo 
    }
    displayName(){
        console.log(this.fullName)
    }

}
let imran1 = new Person1("i m ran",20,25)
console.log(imran1)

// Es6 
class Vehicle {
    color = undefined
    regNo = undefined
    city  = undefined
}

//declaring value outside the class
let audi = new Vehicle()
console.log(audi)

audi.color = "red"
audi.regNo = 123
audi.city = "pune"

// using constructor


class Vehicle2 {
    constructor(color,regNo,city){
        this.color = color
        this.city = city
        this.regNo = regNo
    }
}

let BMW = new Vehicle2("black",123,"Mumbai")
console.log(BMW)

// set method

class Vehicle3 {
    setColor(cl){
        this.color = cl
    }

    setReg(rg){
        this.rg = rg
    }

    setCity(city){
        this.city = city 
    }

}

let maruti = new Vehicle3()
console.log(maruti)
maruti.setCity("pune")
maruti.setColor("red")
maruti.setReg(123)
console.log(maruti)

// Es6 

// Encapsulation 

// Inheritance 
// Polymorphism 
// Abstraction // Interface -- typescript
class Bank {
    constructor(accName, accNo , city , bal){
        this.accName = accName
        this.accNo = accNo
        this.city = city
        this.bal = bal
        this.transaction = []
    }
    depoist(amount){
        this.bal = this.bal + amount 
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount){
        if(this.bal > amount){
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('insufficent bal')
        }
    }

    lastFiveTransaction(){
        console.log(this.transaction.slice(-5))
    }

}

let imran2 = new Bank("imran shaikh",007,"pune",10000)
console.log(imran2)
imran2.withdrawl(5000)
imran2.depoist(1000)
imran2.withdrawl(100)
imran2.depoist(10000)
imran2.depoist(10000)
imran2.withdrawl(5000)
imran2.withdrawl(5555)
imran2.lastFiveTransaction()