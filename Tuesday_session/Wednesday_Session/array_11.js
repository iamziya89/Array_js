// Sorting Property
// let nums=[3,2,4,6,9];
// console.log(nums.sort());

// let names=['vasanth','sangakara','Dravid','kumar'];
// console.log(names.sort());

let nums=[3,2,4,6,9,21,12,39,1000];
// console.log(nums.sort());
console.log(nums.sort(function(a,b){
    return b-a;
}));
