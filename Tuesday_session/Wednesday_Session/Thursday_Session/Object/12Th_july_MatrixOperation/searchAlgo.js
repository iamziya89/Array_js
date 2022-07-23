//   Searchinh Algorithms
// let nums=[10,13,69,45,36,76]
// // console.log(nums.length);
// let target=45
// console.log(nums.includes(450));
// function isPresent(nums,target){
// for(let i=0; i<nums.length;i++){
//     if(nums[i]===target){
//         return true
//     }
// }
// return false;
// }
// console.log(isPresent([10,13,69,45,36,76],45))



// //   Strings
// let n1=[1,2,3]
// let n2=[4,5,6]
// // console.log(n1.concat(n2));
// // n1.push("vasanth");
// // console.log(n1.concat(n2),n1);
// console.log(n1.concat('Mohd',n2))

// let n1=[1,2,3]
// let n2=[4,5,6]
// let n3=[7,8,9]
// // console.log(n1.concat("Mohd",n2,n3))
// // console.log(n1,'Ziya',n2,n3);
// // console.log([n1,'Ziya',n2,n3]);
// console.log([...n1,'Ziya',...n2,...n3]);


// let n1=[1,2,3]
// let n2=n1;
// n2[0]=10;
// console.log(n1,n2);   //    Output:[ 10, 2, 3 ] [ 10, 2, 3 ](ek me changes hone par dono me changes hoga)

let n1=[1,2,3]
let n2=[...n1];
n2[0]=10;
console.log(n1,n2);   //   OutPut : [ 1, 2, 3 ] [ 10, 2, 3 ]  