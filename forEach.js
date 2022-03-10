function userCreatedForEach(array){
    for(let i=0;i<array.length;i++){
        




Array.prototype.userCreatedForEach = (callback) => {
    for(let i=0;i<this.length;i++){
        callback(this[i]);
    }
}

function print(number){
    console.log(number);
}

const array = [1,2,3,4,5];
array.userCreatedForEach(print);