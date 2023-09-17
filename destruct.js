// struture and destruture 

let arr = [11,22,33,44]
console.log(arr[0])
console.log(arr[1])


let a = arr[0]
let b = arr[1]
let c = arr[2]
let d = arr[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)


arr = [11,22,33,44]

let [aa,bb,cc,dd] = arr
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

        
let cars= ["audi","bmw","merc"]
let [x,y,z] = cars
console.log(x)
console.log(y)
console.log(z)

// object

let details = {
    firstName:"Imran",
    lastName:"Shaikh",
    age:25
}

let {firstName,lastName,age} = details
console.log(firstName)
console.log(lastName)
console.log(age)

let {firstName:fn,lastName:ln,age:ag} = details //aliasing object key
console.log(fn)
console.log(ln)
console.log(ag)

let bio= {

    country:"India",
    state:"Maharashtra",
    cities:["pune","mumbai","kolhapur"]

}
let {country:cy,state:st,cities:[p,q,r]} = bio
console.log(cy)
console.log(st)
console.log(p)
console.log(r)

//array of arrays

let mob = [["oppo","vivo"],["1+","bbk"]]
let [[j,k],[l,m]] = mob
console.log(j)
console.log(k)
console.log(l)
console.log(m)

let user = {
    userone:{
        firstName:"karan",
        lastName:"walia"
    },

    usertwo:{
        firstName:"rahul",
        lastName:"shetty"
    }
}

let {userone:{firstName:oo,lastName:ii},usertwo:{firstName:pp,lastName:uu}} = user
console.log(oo)
console.log(ii)
console.log(pp)
console.log(uu)

let vehicles = [
    {
        type:"sedan",
        color:"red",
        company:"audi"
    },

    {
        type:"SUV",
        color:"white",
        company:"bmw"
    }
]

let [{type:t1,color:c1,company:co1},{type:t2,color:c2,company:co2}] = vehicles
console.log(t1)
console.log(co2)

// // spread operator and rest operator 

function add(...arr){
    //console.log(arr)
    let rst=arr.reduce(function(acc,el){
        return acc + el
    },0)

    return rst
}

let qqqq = add(10,20,30,40,90,60)
console.log(qqqq)


//-----------------------------------------------------------------------

// // Es6 ==>

// let names = ["chinmay","poorva","ram"]
// let [aa ,bb,cc ] = names
// let [dd ,,ee ] = names

// console.log(aa)
// console.log(bb)
// console.log(cc)

// console.log(dd)
// console.log(ee)


// // program2 

// let cities  = [["nagpur","mumbai"],"banglore","bhopal"] 

// let [[aaa1,bbb1],bbb,ccc] = cities

// //console.log(aaa)
// console.log(bbb)
// console.log(ccc)
// console.log(aaa1)
// console.log(bbb1)

let rr= 1
let rrr= 2


console.log(rr)
console.log(rrr)
let temp ;

 temp = a
 a = b 
 b = temp

// let x = 1 ;
// let y = 2 ;
// [x,y]=[y,x];  // [2,1]

// console.log(x)
// console.log(y)


// object

let person = {

    firstName: "imran",
    lastName: "khan"
}

let { firstName: fn3, lastName: ln3} = person
// console.log(firstName)
// console.log(lastName)
console.log(fn3)
console.log(ln3)

// combination 
let students = [
    {
        fullName: "asif",
        marks: 55
    }
    ,
    {
        fullName: "lowkey",
        marks: 77
    }
]
let [ {fullName:fn1,marks:mk1},{fullName:fn2,marks:mk2}] = students
console.log(fn1)
console.log(mk2)

let obj = {
    skills:[2,3,4],
    skills2:[22,33,44]
}
let {skills:[a6,a7,a8],skills2:[a66,a77,a88]}  = obj
console.log(a6)
console.log(a77)


let info = {
    parents:{
        father:"will",
        mother:"karen"
    }
}

let { parents:{father:f1,mother:m1}} = info
console.log(f1)
console.log(m1)