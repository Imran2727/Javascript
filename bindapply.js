// let chinmay = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     printName: function () {
//         console.log(this.firstName + this.lastName)
//     }

// }

// chinmay.printName()
// //console.log(chinmay.printName)

// let printName2 = chinmay.printName;

// // let printName2 = function(){
// //     console.log(this.firstName + this.lastName)
// // }

// printName2();
// //console.log(undefined+undefined)



// // program 



// let chinmay2 = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     displayName: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// chinmay2.displayName()
// console.log(chinmay.displayName)

// // function(){
// //     console.log(this.firstName + this.lastName)
// // }

// let a = chinmay.displayName

// let ab = function () {
//     console.log(this.firstName + this.lastName)
// }

// ab()



let qaz = {
    firstName: "imran",
    lastName: "shaikh"
}
let wsx = {
    firstName: "imran2",
    lastName: "shaikh2"
}


let displayName = function(){
    console.log(this.firstName +" "+this.lastName)
}

let fn = displayName.bind(qaz)
fn()

displayName.bind(wsx)()
function add(){
    return function(){
        console.log('hello')
    }
}

add()()

// program 3

function displayName3(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
}

let edc = {
    firstName:"ryan",
    lastName:"reynolds"
}

let rfv = {
    firstName:"will",
    lastName:"ferrel"
}

displayName3.call(edc)
displayName3.call(rfv)

// apply


let display4 = function(greet){
    console.log(`${greet} ${this.firstName}  ${this.lastName}`)
}

let tbt = {
    firstName:"karl",
    lastName:"wolf"
}

let iop = {
    firstName:"lashana",
    lastName:"lynch"
}

display4.apply(tbt,['Good morning'])



//  bind apply call??



// program 2


let b = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this)
        console.log(this.firstName , this.lastName)
    }
}

b.displayName()

let c = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:()=>{
        console.log(this)
        console.log(this.firstName + this.lastName)
    }
}

c.displayName()