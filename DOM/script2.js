let headingOne = document.querySelector('h1')
headingOne.addEventListener('click',function(){
    headingOne.style.background =  "yellow"
})


//tagName
let paraByTagName = document.querySelector('p')
// id
let paraById = document.querySelector('#edc')
// class
let paraByClass = document.querySelector('.rfv')
// common formula   ==> tagName[attribute = "value"]
let commonFormula = document.querySelector('p[class="rfv"]')


console.log(paraByTagName)
console.log(paraById)
console.log(paraByClass)
console.log(commonFormula)


//   <h2 name = "iop" class = "qaz" id = "wsx">IMRAN</h2>

// Tagname 

let qq = document.querySelector('h2')
console.log(qq)

// class 
let cc = document.querySelector('.qaz')
console.log(cc)

// id 

let dd = document.querySelector('#wsx')
console.log(dd)

//common

let ee = document.querySelector('h2[name="iop"]')
console.log(ee)