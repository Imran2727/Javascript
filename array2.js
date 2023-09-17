//old way

let age=[22,24,33,44,40]
//let birthyear=[]
//for(let i=0;i<age.length;i++){
  //  console.log(i)
    //let by=2022-age[i]
    //birthyear.push(by)
//}
//console.log(birthyear)

//map method
let aa=age.map(function(el,index,arr)
{
 //   console.log(el,index,arr)
    return 2023-el
})
console.log(aa)

let numb=[1,2,3,4,5,6,7,8,9]
let qq=numb.map(function(el,index,arr){

    return el*4
})
console.log(qq)



//method filter
let r=[11,22,33,44,55,66,77]
//let abv40=[]
//for (let i=0;i<r.length;i++){
  //if(r[i]>40){
  //abv40.push(r[i])
//}
//}
//console.log(abv40)


//new way
let l=r.filter(function(el,index,arr){
  return el>40
})
console.log(l)


//reduce method
let mrks=[40,50,77,90]
//let sum=0
//for(i=0;i<mrks.length;i++){
//  sum=sum+mrks[i]
//}
//console.log(sum)


//new way
let rrr=mrks.reduce(function(acc,el,index,arr){
  return el+acc
},0)
console.log(rrr)

