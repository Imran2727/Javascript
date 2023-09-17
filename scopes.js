// function declaration 
function addition(x,y){
    return x + y
}
let r = addition(12,13)
console.log(r)

//  function expression 

let addition2 = function(x,y){
    return x + y
}

let ya = addition2(12,13)
console.log(ya)

let addition3 = (x,y)=>{
    return x + y
}
let yai = addition3(12,13)
console.log(yai)

var x = 100
// console.log(window.x)
// window.alert()
// window.prompt('do you wish to learn')
// windom.confirm('do you wish to learn python as well?')
// window.location

// Object - property and methods


// program One

var firstName = "vijeet"
let person = {
        firstName:"chinmay",
        lastName:"deshpande",
        display:function(){
            console.log(firstName)
        }

}

console.log(person.firstName)
console.log(person.lastName)
person.display()

// this refer to the current calling object

var fname = "ram"
let person2 = {
    fname:"chinmay",
    lname:"deshpande",
    display:function(){
        console.log(this.fname)
        // console.log(person2.fname)
        function person3(){
            console.log(this.fname) //
            // console.log(window.fname)
        }
        person3()
    }

}
person2.display()




let person3 = {
    fname:"chinmay",
    lname:"deshpande",
    display:function(){
        console.log(this.fname)
        // console.log(person3.fname)
        let person4 = ()=>{
            console.log(this.fname) //
            // console.log(window.fname)
        }
        person4()
    }

}
person3.display()


// window
let person4 = {
    fname:"chinmay",
    lname:"deshpande",
    display:()=>{
        console.log(this.fname)
        let person5 = ()=>{
            console.log(this.fname) 
        }
        person5()
    }
}
person4.display()

// lexical scope


function additionE(){
    //console.log(i)
    let x = 10 
    let y = 20 
    console.log(x+y) // 30

    function additionF(){
        let r = 100
        let u = 40
        console.log(x+y)
        console.log(r+u)

        function additionG(){
            let i = 89
            let l = 90
            console.log(x+y+r+u) 
            console.log(i+l)
        }

        additionG()

        
    }
    additionF()

}

additionE()