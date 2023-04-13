let arr =  [
    {name: 'John',
    surname: 'Black',
    age: 23,}
]
function printkeys (){
   for(let i in arr){
    console.log(arr[i])
   }
}
printkeys()

function nums(...numbers){
    let sum = numbers.reduce((n1,n2)=>n1 += n2)
    console.log(sum / numbers.length)
}
nums(123,41,23,4,2325,23,2352,3523,525,55,24,235,32,324,1234,23,231,56136541235723,6)