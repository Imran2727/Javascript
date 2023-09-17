let headOne = document.querySelector('h1')
console.log(headOne)

let headtwo=document.querySelector('h2')
console.log(headtwo)
headtwo.addEventListener('click',function(){
    headtwo.textContent="okay"
})
headOne.addEventListener('mouseover',function(){
    headOne.textContent = "KDA"
})
headOne.addEventListener('mouseout',function(){
    headOne.textContent="Imran"
})