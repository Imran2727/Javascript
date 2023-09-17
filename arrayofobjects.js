let students=[
    {
        firstname:"Imran",
        age:25,
        skills:["C","C++","Java"],
        city:"Pune"
    },
    {
        firstname:"Chinmay",
        age:35,
        skills:["C","Java","Python"],
        city:"Mumbai"
    },
    {
        firstname:"Anyone",
        age:20,
        skills:["Javascript","Java"],
        city:"Mumbai"
    }
]

//For finding number of skills for each firstname
for(let i=0;i<students.length;i++){
    console.log(students[i].firstname,students[i].skills.length)
}
students.forEach(function(el){
    console.log(el.skills.length)
})

//To find which firstname starts with i

let q=students.find(function(el){
    return el.firstname.startsWith("I")
})
console.log(q)

//To sum the age and find average
let aa=students.reduce(function(acc,el){
    return acc+el.age
},0)
console.log(aa/students.length)

//Push/add "Kotlin" in skills
students.forEach(function(el){
    el.skills.push("Kotlin")
})
console.log(students)


//Filter students with C skill
let v=students.filter(function(el){
    return el.skills.includes("C")
})
console.log(v)

v.forEach(function(el){
    console.log(el.firstname)
})

//For finding student whose age is greater than 30 and city mumbai

let t=students.filter(function(el){
    return el.city.includes("Mumbai")&&el.age>30
})
console.log(t)
t.forEach(function(el){
    console.log(el.firstname)
})

//For age>20 and skill "Java"
let qaz=students.filter(function(el){
    return el.skills.includes("Java")&&el.age>20
})
qaz.forEach(function(el){
    console.log(el.firstname)
})