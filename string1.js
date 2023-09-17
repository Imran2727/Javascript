//Reverse a string
let a="Imran" //narmi
let str=""
for(i=0;i<a.length;i++){
    str=a[i]+str
}
console.log(str)
let rvstr2=""
for(i=4;i>=0;i--){
    rvstr2=rvstr2 + a[i]
}
console.log(rvstr2)


//Number+string=string
//string+Nnumber=string
//string+string=string
//number+number=number
//so
let g=10
let h=40
let j="Imran"
console.log(g+h+j)
console.log(j+h+j)
console.log(j+h+g)


let Namez="Imran"
let m=Namez.slice(3)
console.log(m)
console.log(Namez.slice(2,-1))
console.log(Namez.slice(-4,-2))
console.log(Namez.slice(-1,3))

let ll=Namez.startsWith("I")
console.log(ll)
let kk=Namez.endsWith("ran")
console.log(kk)

console.log(Namez.charAt(2))
console.log(Namez.charAt(4))

let info="Imran@Khan"
console.log(info.split("@"))
