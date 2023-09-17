
// tagName
let liList = document.querySelectorAll('li')
let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')

//change color  to red on click 
 buttonA.addEventListener('click',function(){
     for(let i = 0 ; i < liList.length ; i++){
         liList[i].style.color = "red"
     }
    })


// change to uppercase of button

 /*buttonA.addEventListener('click',function(){

     for(let i = 0 ; i <liList.length ; i++ ){

         liList[i].textContent = liList[i].textContent.toUpperCase()

     }

 })

buttonA.addEventListener('click',function(){
     for(let i = 0 ; i <liList.length ; i++ ){
         liList[i].textContent = liList[i].textContent.toLowerCase()

     }

 })

ulList.addEventListener('mouseover',function(){
     for(let i = 0 ; i <liList.length ; i++ ){
         liList[i].textContent = liList[i].textContent.toLowerCase()

     }

 })
 ulList.addEventListener('mouseout',function(){
     for(let i = 0 ; i <liList.length ; i++ ){
         liList[i].textContent = liList[i].textContent.toUpperCase()

     }

 })*/



//program one info 2 



/* for(let i = 0 ; i < liList.length ; i++){
     console.log(liList[i].textContent)

    liList[i].textContent = "Grapes"
    liList[i].style.color = "red"
    liList[i].style.background = "green"
    liList[i].style.width = "100px"
    liList[i].style.height = "50px"
 }*/

// program one 
//console.log(liList)

// Node List is very similar to array


// let person = {

//     fullName:"IMRAN",
//     age:25

// }



// person.age = 34

// person.lang = "Latin"

// console.log(person.fullName)

// delete person.fullName

// let person = {

//     parent:{
//         father:"abc",
//         mother:"xyz"
//     }


// }

//person.parent.mother = "jkl"