console.log(3 == 3.0)
console.log('3')
console.log(typeof('3'))
console.log(Number('3'))
console.log(+'3')

let a = Number.parseInt("30px")
let b = Number.parseInt('aa30px')


let c = Number.parseFloat("23.55px")
let d = Number.parseFloat("err56.76px")

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//----------------------------------

let y = Number.isNaN('20')
let y1 = Number.isNaN(20)
let y2 = Number.isNaN(+'20')
let y3  = Number.isNaN(10/0)
console.log(y1)
console.log(y2)
console.log(10/0)


// isFiniti()
// to check whether the value is number
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20'))
console.log(Number.isFinite(10/0))


// isInteger()
console.log(Number.isInteger(34.5))
console.log(Number.isInteger(34))
console.log(Number.isInteger('34'))

// isFloat()
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

// es20


// 
console.log(Math.sqrt(25))
console.log(5 ** 2)

let max = Math.max(23,444,55,222,33,44,55,66)
let min = Math.min(233,44,55,-22,-33,55)
let PI = Math.PI
console.log(min)
console.log(max)
console.log(PI)

console.log(Math.trunc(34.67))
console.log(Math.ceil(34.67))
console.log(Math.floor(34.67))
console.log(Math.trunc(-34.67))
console.log(Math.floor(-34.67))
console.log(Math.ceil(-34.67))
console.log(-35 > -34)

console.log(Math.round(34.4))
console.log(Math.round(34.5))
console.log(Math.round(34.6))

let nm = 2323.66345345345
console.log(nm.toFixed(2))
console.log(2.35.toFixed(2)) // 2.35
console.log(2.556.toFixed(2))