// switch without break statement

let city = "kjl"
switch(city){
    case 'pune':
        console.log('MH')
    case 'jaipur':
        console.log('RJ')
    case 'kanpur':
        console.log('UP')
    default:
        console.log('Incorrect city name')
}

//switch with break
switch(city){
    case 'pune':
        console.log('MH')
        break
    case 'jaipur':
        console.log('RJ')
        break
    case 'kanpur':
        console.log('UP')
        break
    default:
        console.log("In correct city name")
}

// switch with multiple case
// program 3


switch(city){
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    case 'jaipur':
    case 'udaipur':
        console.log('RJ')
        break
    case 'kanpur':
    case 'varanasi':
        console.log('UP')
        break
    default:
        console.log("In correct city name")
}

// Truthy values 
// falsy values

// Truthy - 1 , '1',-11,"A", "CHINM"," ",true, 4===4, {},[],22.34
// Falsy - 0 , null,undefined,NaN , "" , 2 === '2'


// if(2.44){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

