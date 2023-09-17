// Encapsulation
// object --- properties ===> method only


class Person {

    constructor(name,age,salary){
        this.name = name 
        this.age = age 
        this.salary = salary
    }

    updateName(nm){
        this.name = nm
    }
    updateAge(ag){
        this.age = ag
    }
    updateSalary(sl){
        this.salary =sl
    }


    getName(){
        return this.name 
    }
    getAge(){
      return this.age
    }
    getSalary(){
        return this.salary
    }
}

let imran = new Person('imran khan',12,34)
// program one 
const x = 123
if(true){
    let aa = 10
}

{
    let c = 11
}
// console.log(a)
// console.log(aa)
// console.log(c)


//functions 


const printName = function(){

    let firstName = "may"
    let lastName = "calamay" 

    let printFullName  = function(){
        console.log(firstName +" "+lastName)
    }

    return printFullName
    
}

printName()()



//closure 

function add(){
    let a = 10 
    let b = 20
    return function(){
        console.log(a)
        console.log(b)
    }
  
}
let a = add()
a()


const printName1 = function(){

    let firstName = "cara"
    let lastName = "delevigne" 

    let printFullName  = function(){
        console.log(firstName +" "+lastName)
    }

    return printFullName
    
}

printName()()


//program 3
class  Person2 {
    constructor(){
        let firstName = "karen"
        let lastName = "jillian"
        this.printName = function(){
            console.log(firstName + lastName)
        }

    }

}
let abc = new Person2()
abc.printName()
//console.log(firstName)
//console.log(lastName)


class Person4{
    constructor(firstName,lastName){
        this._firstName = firstName
        this._lastName = lastName
        this.printName = function(){
            return this._firstName + this._lastName 
        }
    }

}

let qaz = new Person4("karl","marx")
console.log(qaz.printName())
