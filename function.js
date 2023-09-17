let x=100
let y=200

console.log(x)
console.log(y)

const a=10
console.log(a)
 
function Arith(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)
    console.log(x%y)
}
Arith(100,70)

//func without parameters and return type:
function add(){
    console.log(9+8+1)

}
add()


//function with parameters and return type:
function addi(x,y){
    console.log(x+y)

}
addi(100,200)

function mul(x,y){
    return(x*y)

}
let pp=mul(20,20)
console.log(pp)
console.log(pp+pp)
console.log(pp+100)
