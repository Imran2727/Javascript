//Function declaration
function add(a,b){
    return a+b
}
let q=add(1,23)
console.log(q)
//Function expression
let add1=function(x,y){
    return x+y
}
let w=add1(111,22)
console.log(w)
//Arrow function
let add2=(a,z)=>{
    return a+z
}
let e=add2(222,333)
console.log(e)
//String as a parameter to function
function greet(word){
    return 'Welcome'+word
}
let i=greet("Imran")
console.log(i)
//Array as a parameter to function
let array=[11,22,33,44,55]
function a1(arr){
    //console.log(arr)
    arr[3]=77
    console.log(arr)
}
console.log(array)
a1(array)
console.log(array)
//Array as a parameter to another function
let qaz=[10,25,50]
function sum(a){
    let rr=a.reduce(function(acc,el){
        return acc+el
    },0)
    return rr
}
let qq=sum(qaz)
console.log(qq)
//Object as a parameter to function
let asd={
    Firstname:"Imran",
    Age:25,
    Branch:"IT"
}
let qwe=asd
function info(ghj){
    qwe.Firstname="sahil"
    qwe.Age=26
    //console.log(qwe)
    return qwe
}
console.log(asd)
let op=info(asd)
console.log(op)


let cities=["Mumbai","Kolhapur","Sangli"]      // array is stored in one constant memory allocation
let names=cities           //same array is stored in different address
let qqq=names.push("Karad")
console.log(cities)        //we make change in array through one address or other address resp 