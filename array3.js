//method forEach()
//adds value to each element
let a=["imran","chinmay","something"]
forEach(function(el,index,arr){
    console.log('welcome' + el)
})
//console.log(s)


//method Find()
//finds and returns the 1st element which satisfies the condition
let d=[11,22,33,44,55,77]
let f=d.filter(function(el,index,arr){
    return el>30
})
console.log(f)

let g=d.find(function(el,index,arr){
    return el>30
})
console.log(g)

//method findIndex()
//gives the index of the 1st element that satisfies the condition
let qq=[1,10,2,3,20,30,40,4,5]
let ww=qq.findIndex(function(el,index,arr){
    return el>5
})
console.log(ww)



//method every()
//returns true if every element satisfies the given condition else returns false
let ee=[10,20,30,40,50]
let rr=ee.every(function(el,index,arr){
    return el>=10
})
console.log(rr)


//method some()
//returns true even if only one or some elements satisfies the condition else returns false
let tt=ee.some(function(el,index,arr){
    return el>40
})
console.log(tt)



//method concat()
//merges/concatenates two arrays into one
let x=[11,22,33,44]
let y=[55,66,77]
let kk=x.concat(y)
console.log(kk)
let ll=y.concat(x)
console.log(ll)



//method join()
//joins the elements of array by given character
let bio=["imran","BE","fresher"]
let pp=bio.join('---')
console.log(pp)


//method fill()
//fills the array with new element on the given index
let gg=["imran",22,55,77,99]
let hh=gg.fill('coding',1,3)
console.log(hh)


//deletes the element from array at given index(include last element)
//method splice()
let city=["Mumbai","Pune","Goa","Nashik"]
//city.splice(index to start,no of elements to delete,element to replace)
city.splice(1,3,"Nagpur")
console.log(city)
