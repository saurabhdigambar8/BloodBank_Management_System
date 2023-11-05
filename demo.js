let num=[1,2,3,4]
let ans=num.map((e)=>sum(e))
function sum(e){
    return e*2
}
console.log(ans);