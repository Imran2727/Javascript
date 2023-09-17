//let headone=document.querySelector('h1')

let addbutton=document.querySelector('button')
let textinput=document.querySelector('input')
let ullist=document.querySelector('ul')

addbutton.addEventListener('click',function(){
  let text=textinput.value
  let newElement = document.createElement('li') // <li></li>
  newElement.textContent = text // <li>New car</li>
  ullist.appendChild(newElement)
  textinput.value = ""
})

