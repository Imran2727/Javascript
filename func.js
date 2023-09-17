//Function declaration
function calc(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}

calc(100,20)

//function expression
let qq=function(x,y){
    return x+y
}
let ww=qq(10,20)
console.log(ww)

//arrow function
let aa=(x,y)=>{
    return x+y
}
let zz=aa(50,70)
console.log(zz)
