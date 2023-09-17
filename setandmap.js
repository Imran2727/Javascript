// array object set 

//set does not stores the duplicate value 


let setA = new Set([11,22,33,11,2,33,44])
console.log(setA)

let aa = setA.size
console.log(aa)

setA.add(444)
console.log(setA)

setA.delete(444)
console.log(setA)

let rr = setA.has(1111)
console.log(rr)

setA.clear()
console.log(setA)

let setB = new Set([23,244,55,6667,88])
console.log(setB)

for(let item of setB){
    console.log(item)
}


// duplicate 


// let numbers = [222,33,44,5,5566,77,77,88,]

// let setC = new Set(numbers)
// //console.log(Array.from(setC))
// Array.from(setC)

// //console.log(setA[0])
// document.querySelector('li') //a = [li,li,li]
// Array.from(a)  // []



// let obj2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23
// }

// Map

let mapA = new Map()
let ar = new Array() // let r = [2,4,5]
let an = new String() // let f = "a"
let on = new Object() // let a = {}

// mapA ==> object property and method

console.log(mapA.size)
//mapA.set(key,value)

mapA.set([22,33,44],"marks")
console.log(mapA)

mapA.set(true,"isadult")
console.log(mapA.get(true))

let aau = mapA.has(true)
console.log(aau)

// mapA.clear()
// console.log(mapA)
console.log(mapA)

mapA.delete(true)
console.log(mapA)

mapA.forEach(function(value,key){
    console.log(value,key)
})

let mapB = new Map([
    [1,"rollnumber"],
    ["color","red"],
    [true,"ismarried"],
    [{a:"s",b:"q"},33]

])

console.log(mapB.size)

for(let a of mapB.keys()){
    console.log(a)
}
for(let a of mapB.values()){
    console.log(a)
}

for(let [key,val] of mapB.entries()){
    console.log(key,val)
}
