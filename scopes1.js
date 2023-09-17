// let obj = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNumber:12,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// obj.display()
// let x = 10 
// // window.x 

// // program 2
// var fullName = "samay"
// var lastName = "deshmukh"

// let info = {
//     fullName:"chinmay",
//     lastName:"deshpande",
//     age:22,
//     display:function(){
//         console.log(this.fullName)
//         console.log(this.lastName)
        
//         function displayTwo(){
//             console.log(this.fullName , this.lastName) // undefined indefined
//         }
//         displayTwo()
//     }
// }
// info.display()

// // arrow function

// var fullName = "samay"
// var lastName = "deshmukh"

// let info2 = {
//     fullName:"chinmay",
//     lastName:"deshpande",
//     age:22,
//     display:function(){
//         console.log(this.fullName)
//         console.log(this.lastName)
        
//         let displayTwo = function (){
//             console.log(this.fullName , this.lastName) // undefined indefined
//         }
//         displayTwo()
//     }
// }
// info2.display()

// let info3 = {
//     fullName:"chinmay",
//     lastName:"deshpande",
//     age:22,
//     display:function(){
//         console.log(this.fullName)
//         console.log(this.lastName)
        
//         let displayTwo =  ()=>{
//             console.log(this.fullName , this.lastName) // undefined indefined
//         }
//         displayTwo()
//     }
// }
// info2.display()



// let info4 = {
//     fullName:"chinmay",
//     lastName:"deshpande",
//     age:22,
//     display:()=>{
//         console.log(this.fullName)
//         console.log(this.lastName)
        
//         let displayTwo =  ()=>{
//             console.log(this.fullName , this.lastName) // undefined indefined
//         }
//         displayTwo()
//     }
// }
// info2.display()

// /------------------------------------------------/

// //lexical  scope 


// function addition(){
//     let x = 10 
//     let y = 20 
//     console.log(x+y)

//     function addition2(){
//         let a = 40
//         let b = 70
//         console.log(x+y)
//         console.log(a+b)
//         console.log(yb)
//         function addition3(){
//             let ya = 70
//             let yb= 45
//             console.log(x+y+a+b)
//             console.log(ya+yb)
            
//         }

//         addition3()
//     }
//     addition2()
// }
// addition()

// let and const and var 

// assignment or updation

let x = 10 
console.log(x)
x = 400
console.log(400)


var y = 300
console.log(y)
y = 400
console.log(y)

const i = 100
console.log(i)
//i = 500


// scope 

//var is function scoped else everywhere global scope
// let and const are blocked scope


var numberOne = 600 

{
    console.log(numberOne)
}

{
    var numberTwo = 67
}
console.log(numberTwo)

// let and const 

// {
//     let numThree = 10
// }
// console.log(numThree)

// {
//     const numberFour = 10

// }

// console.log(numberFour)


// let qwerty = 1000

// {
//     console.log(qwerty)
// }



let numberFive = 100

{
    let numberFive = 200
    console.log(numberFive) // 
}

console.log(numberFive) // 100



let numberSix = 100

{
    numberSix = 200
    console.log(numberSix) //  200
}

console.log(numberSix) //  200

console.log('-------------------------')

let  numberSeven = 100
var numberEight = 200
function puzzle(){
    var  numberEight = 900 
    console.log(numberSeven) // 100
    console.log(numberEight) //900
    {
        console.log(numberEight) // 900
        let numberSeven = 4000
        console.log(numberSeven) // 4000
    }
    numberSeven = 6000

}
console.log(numberSeven) // 100
puzzle()
console.log(numberSeven) //  6000