class Person {

    constructor(firstName, lastName, city, marks) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.marks = marks
    }

    Percentage() {
        return (this.marks.reduce(function (acc, el) {
            return acc + el
        }, 0) / 500) * 100
    }

    static greeting() {

    }

}

let marks = [[90,90,90,90,90], [70,70,70,70,70], [88,88,88,88,88], [100,50,60,70,70], [55,100,40,50,70]]

let students = []
for (let i = 0; i < 5; i++) {
    
    let obj = new Person(`Imran-${i + 1}`, `shaikh-${i + 1}`, `city${i + 1}`, marks[i])
    students.push(obj)
}
console.log(students)

let Array = []
for (let i = 0; i < students.length; i++) {
    Array.push(students[i].Percentage())
}

console.log(Array)

console.log(Array.reduce(function (acc, el) {
    return acc + el
}, 0) / students.length)

// print name of every student 

students.forEach(function (el) {
    console.log(el.firstName)
})

// lastName of every student 
students.forEach(function (el) {
    console.log(el.lastName)
})

// firstName with %
students.forEach(function (el) {
    console.log(el.firstName + " " + el.Percentage())
})

//calculate highest %
//console.log(Array)
let per = Array
let min = per[0]
let max = per[0]

for (let i = 0; i < per.length; i++) {

    if (per[i] < min) {
        min = per[i]
    }
    else if (per[i] > max) {
        max = per[i]
    }
}

console.log(min)
console.log(max)

console.log(students.find(function(el){
    return el.Percentage() == max
}).firstName)


console.log(students.find(function(el){
    return el.Percentage() == min
}).firstName)

console.log(students.every(function(el){
    return el.Percentage() > 15
}))

// lang = "spanish"
students.forEach(function(el){
    el.lang = "spanish"
})
console.log(students)

// Vehicle 

class Vehicle {

    constructor(type,color,reg){
        this.type = type
        this.color= color
        this.reg = reg
    }

}

let cars = [
    new Vehicle("sedan","yellow","777"),
    new Vehicle("SUV","red","888"),
    new Vehicle("hatchback","black","999"),
    
]

console.log(cars)