
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#one')
let textA = document.querySelector('input')

let liList = document.querySelectorAll('li')

for(let i = 0 ; i < liList.length ; i++){
    createButton(liList[i])                //create button for each text
}


buttonA.addEventListener('click', function () {
    let text = textA.value
    let newElem = document.createElement('li') // <li></li>
    newElem.textContent = text // <li>Melon<l/i>
    createButton(newElem)      //function call
    ulList.appendChild(newElem)
    textA.value=""
})


ulList.addEventListener('click',function(event){

    if(event.target.tagName === "BUTTON"){
        console.log(event.target.className)
        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        if(event.target.className === "down"){

            let li = event.target.parentElement
            let ul = li.parentElement
            let nextSi = li.nextElementSibling
            ul.insertBefore(nextSi,li)
        }

        if(event.target.className === "up"){

            let li = event.target.parentElement
            let ul = li.parentElement
            let prevSi = li.previousElementSibling
            ul.insertBefore(li,prevSi)            
        }
    }
})



function createButton(li) {
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.classList = "remove" // <button class = "remove" >remove</button>
    li.append(remove)


    let up = document.createElement('button') // <button></button>
    up.textContent = "up" 
    up.classList = "up" 
    li.append(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" 
    down.classList = "down" 
    li.append(down)
}