let keyValue =   ['name', 'John', 'lastname', 'Black', 'age', '23']
function printkeys (){
let obj = {}
for(let i = 0; i < keyValue.length; i += 2){
    const key = keyValue[i]
    const value = keyValue[i + 1]
    obj[key] = value
}
return obj
}
const obj = printkeys()
console.log(obj)

function nums(...numbers){
    let sum = numbers.reduce((n1,n2)=>n1 += n2)
    console.log(sum / numbers.length)
}
nums(123,41,23,4,2325,23,2352,3523,525,55,24,235,32,324,1234,23,231,56136541235723,6)