// spread operator and rest operator 
//rest operator

function add(...arr){
    //console.log(arr)
    let rst=arr.reduce(function(acc,el){
        return acc + el
    },0)

    return rst
}

let qqqq = add(10,20,30,40,90,60)
console.log(qqqq)

//spread operator

 function seprate(a,...num){//in this is (a) can on which you are define the condition
    let ss =num.filter(function(el){
        return el > a
    })
    return ss
}

let sr = seprate(10,8,15,16,23,5,20,12,4,6,22,)
console.log(sr)

function divide(a,...nume){
    let rrr = nume.filter(function(el){
        return el < a
    })
    return rrr
}

let pq = divide(10,8,15,16,23,5,20,12,4,6,22,)
console.log(pq)
