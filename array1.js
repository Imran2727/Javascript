//method--reverse()
//reverses the actual array
let bikes=["Honda","Suzuki","Yamaha","Bajaj"]
console.log(bikes)

let qq=bikes.reverse()
console.log(bikes)
let ww=bikes.reverse()
console.log(bikes)

//method--includes()
//checks for defined element,if found returns true else returns false
let ee=bikes.includes("Suzuki")
console.log(ee)
let rr=bikes.includes("Java")
console.log(rr)

//method--indexOf()
//checks for element,if found returns the index of the element else returns "-1"
let tt=bikes.indexOf("Yamaha")
console.log(tt)
let yy=bikes.indexOf("Java")
console.log(yy)

//method--slice()
//slices or breaks the string/array into substrings/subarrays
let city=["Pune","Mumbai","Bengaluru","Kolkata"]
console.log(city)

let uu=city.slice(1,3)     //last value/index not inclusive
console.log(uu)
console.log(city.slice(2))
console.log(city.slice(-1))
console.log(city.slice(-4,3))
console.log(city.slice(-3,-1))
console.log(city.slice(-1,-3))
 
//method--sort()
//sorts the array into alphabetical order or ascending order
let ll=city.sort()
console.log(ll)


//flat method
//merges multiple arrays into single array
let hh=[[11,33,44],[22,55,66],[77,99]]
console.log(hh)
let kk=hh.flat()
console.log(kk)
