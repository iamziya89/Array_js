let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
// console.log(matrix);
// console.log(matrix[2][2]);

//  Find the number of rows and column in given matrix
// let rows=matrix.length;
// console.log(rows);

//   Number of column preset in the matrix
// let cols=matrix[3].length;
// console.log(cols);

//   Find the sum of all number present in the given matrix
// let rows=matrix.length;
// // console.log(rows);
// let cols=matrix[0].length;
// // console.log(cols);
// let sum=0;
// for(let i=0; i<rows; i++){
//     for(let j=0; j<cols; j++){
//         sum+=matrix[i][j];
//     }
// }
// console.log(sum);


// // Sum of first row element
// let sum=0;
// for(let i=0; i<matrix.length-3;i++){
//     for(let j=0; j<matrix[0].length; j++){
//         sum+=matrix[i][j];
//     }
// }
// console.log(sum);




//  Sum of first columns
let sum=0;
for(let i=0; i<matrix.length;i++){
    for(let j=0; j<matrix[0].length-3; j++){
        sum+=matrix[i][j];
    }
}
console.log(sum);