// synchronus

// function One(){
//     console.log("One is executed")
//     alert('hello')
// }
// function Two(){
//     console.log("Two is executed")
// }


// One()
// Two()


// Async

// function One(){
//     setTimeout(function(){
//         console.log('One executed ')
//     },2000)
// }

// function Two(){
//     console.log('Two is executed')
// }

// One()
// Two()


// console.log('id created')
// console.log('user retrive')
// console.log('user update')

// call back hell

// function info() {
//     setTimeout(function () {
//         console.log('id created')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user retrive')
//     }, 1000)

//     setTimeout(function () {
//         console.log('user update')
//     })
// }
// info()


// call back hell

// function info() {
//     setTimeout(function () {
//         console.log('id created')
//         setTimeout(function () {
//             console.log('user retrive')
//             setTimeout(function () {
//                 console.log('user update')
//      

//         }, 1000)

//     }, 2000)
// }
// info()


// promises --- Es6 promises


// promises is the new way of handling async code for synchronous  execution


let pro = new Promise(function (resolve, reject) {
    let x = 100
    let y = 100
    if (x == y) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
    

})

// consuming promise 
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })

// consuming promise with then block
pro.then(function(x){
    console.log(x)
})
.catch(function(x){
    console.log(x)
})