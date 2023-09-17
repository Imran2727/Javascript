// rest paramter
function addition(...arr){
    //console.log(arr)

    return arr.reduce(function(acc,el){
        return acc + el
    },0)

}
let aa = addition(12,13,14,11,22,33,44)
console.log(aa)


// spread parameter
let number = [11,22,33,44,55]
function addition2(a,b,c){
    console.log(a+b+c)
}
addition2(...number)


// [1,2,3,4 ] === 1,2,3,4   //spread
// 12,33,44,55 ==== [12,33,44,55]    //rest

let arr = [1,2,3,4]
let arr2 = [333,44,55,6]

//merge two array into one
let aaa = [...arr,...arr2]
console.log(aaa)

// 123,32,3,3344,55,22 ====>  [123,32,3,3344,55,22]  rest operator

//for of loop

let person = {
    fullName:"Imran",
    lastName:"Shaikh",
    age:26,
    rollNumber:77
}

for(let key in person){
    console.log(key,person[key])
}

// for of for array 

let names = ["chinmay","imran","laal"]
for(let item of names){
    console.log(item)
}

// for of for objects


let  info ={
    firstName:"karl",
    lastName:"marx",
    age:22,
    rollNumber:33
}


console.log(Object.keys(info))
console.log(Object.values(info))
console.log(Object.entries(info))

// let [key,value] = Object.entries(info)[0] //[ 'firstname', 'karl' ]
// let [key1,value1] = Object.entries(info)[1]
// let [key2,value2] = Object.entries(info)[2]
// let [key3,value4] = Object.entries(info)[3]

// keys()
for(let item of Object.keys(info)){
    console.log(item)
}
// values()
for(let item of Object.values(info)){
    console.log(item)
}
// entries()
for(let [key,value] of Object.entries(info)){
    console.log(key ,value)
}


// ternary opertor

let a = 10 
let b = 20 

let rrr =  a > b ? "a is greater":"b is greater"
console.log(rrr)


let aaaa = 10

// aaaa ++ 
// aaaa = aaaa + 1
// aaaa += 1

// nullish

//(null or undefined)

const foo = null ?? 'default string';
console.log(foo);

// const baz = 0 ?? 42;
// console.log(baz);
let qa ;

let ab = qa ?? "hello"
console.log(ab)

let abc = 7 === 7 ?? "hello"
console.log(abc)

let qwerty = 7 === 7 || 10
console.log(qwerty)

let qwerty2 = 7===7 && 8!==8
console.log(qwerty2)


let personA = {
    brotherOne:{
        firstName:"imran",
        lastName:"shaikh",
        parent:{
            father:"mukhtar",
            mother:"sarfaraz"
        }
    }

}

//optional parameter

//console.log(personA.brotherTwo.parent.father)
console.log(personA?.brotherTwo?.parent?.father)
console.log(personA?.brotherOne?.parents?.father)
console.log(personA?.brotherOne?.parent?.father)