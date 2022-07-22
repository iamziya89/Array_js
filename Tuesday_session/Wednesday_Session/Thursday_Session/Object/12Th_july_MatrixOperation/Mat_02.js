let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

// // Sum of diagonam elements
// let sum=0;
// for(let i=0; i<matrix.length; i++){
//     for( let j=0; j<matrix[0].length;j++){
//         if(i===j){
//             sum+=matrix[i][j];
//         }
//     }
// }
// console.log("The sum of diaginal element : "+sum);

//  Sum of diagonal element  (Another method)
let sum=0;
for(let i=0; i<matrix.length; i++){
    sum+=matrix[i][i]
}
console.log(sum);

