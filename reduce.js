function userCreatedReduce(callback,initialValue){
    let result = initialValue;
    for(let i=0;i<this.length;i++){
        result = callback(result,this[i]);
    }
    return result;
}

function sum(a,b){
    return a+b;
}

const array = [1,2,3,4,5];
const result = userCreatedReduce(sum,0);
console.log(result);

// Array.prototype.userCreatedReduce = (callback,initialValue) => {
//     let result = initialValue;
//     for(let i=0;i<this.length;i++){
//         result = callback(result,this[i]);
//         console.log(result);
//     }
//     return result;
// }

// function sum(a,b){
//     return a+b;
// }

// const array = [1,2,3,4,5];
// const result = array.userCreatedReduce(sum,0);
// console.log(result);