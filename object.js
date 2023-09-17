let obj={
    Firstname:"Imran",
    Lastname:"Shaikh",
    Age:25
}
console.log(obj)


//retrieve 
let qq=obj.Firstname //By Dot notation
console.log(qq)
let ww=obj['Firstname'] //By bracket notation
console.log(ww)

//add
obj.hobby="coding"
obj['city']="pune"
console.log(obj)

//update
obj.Firstname="Simran"
obj['Firstname']="Sam"
console.log(obj)

//delete
delete obj.city
delete obj['hobby']
console.log(obj)


let animal={
    Name:"Tiger",
    City:"Bengal",
    age:10

}

console.log(animal.age)
for(let key in animal){
    console.log(key,animal[key])
}

console.log(animal)

let numbers=[1,2,3,4,5]
console.log(typeof numbers)

let namex="Imran"
console.log(typeof namex)

let city="pune"
console.log(city[0])
console.log(city[3])

let cities=["Mumbai","Pune","Goa"]
for(i=0;i<cities.length;i++){
    console.log(cities[i])
}

let Firstname="Imran"
for(i=0;i<Firstname.length;i++){
    console.log(Firstname[i])
}
//For backwards
for(i=4;i>=0;i--){
    console.log(Firstname[i])
}

let State="Maharashtra"

let ll=State.toUpperCase()
console.log(ll)

let kk=State.toLowerCase()
console.log(kk)

let ii=State.includes("s")
console.log(ii)
let oo=State.includes("m")
console.log(oo)

let city2="Nagpur"

//Method chaining---
let qaz=city2.toUpperCase().toLowerCase().length
console.log(qaz)

let qqq=city2.indexOf("r")
console.log(qqq)
let www=city2.indexOf("n")
console.log(www)

let rrr=" koala"
let pp=rrr.trimStart()
console.log(pp)

let llj="koala "
let kkl=llj.trimEnd()
console.log(kkl)

let gg=" koala "
let hgh=gg.trim()
console.log(hgh)

