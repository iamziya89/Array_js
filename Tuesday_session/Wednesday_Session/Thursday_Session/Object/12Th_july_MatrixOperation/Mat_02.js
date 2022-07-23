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


// //  Sum of diagonal element  (Another method)
// let sum=0;
// for(let i=0; i<matrix.length; i++){
//     sum+=matrix[i][i]
// }
// console.log(sum);


// let sum=0;
// for(let i=0; i< matrix.length; i++)
// {
//     for(j=matrix.length-1; j>=0;j--){
//         if(i+j==3){
//         sum+=matrix[i][j];
//         }
//     }
// }
// console.log(sum);

// //  Sum of first column
// let sum=0;
// let start=0;
// for(let i=0; i< matrix.length; i++)
// {
//         sum+=matrix[i][start];
// }
// console.log(sum);

// //  Sum of second column
// let sum=0;
// let start=1;
// for(let i=0; i< matrix.length; i++)
// {
//         sum+=matrix[i][start];
// }
// console.log(sum);


// //  Sum of first rows
// let sum=0;
// let start=0;
// for(let i=0; i< matrix[0].length; i++)
// {
//         sum+=matrix[start][i];
// }
// console.log(sum);

//  Sum of second rows
// let sum=0;
// let start=1;
// for(let i=0; i< matrix[0].length; i++)
// {
//         sum+=matrix[start][i];
// }
// console.log(sum);



// Sum of diagonals
let sum=0;
let start=0;
for(let i=0; i< matrix.length; i++)
{
        sum+=matrix[start][i];
        start+=1;
}
console.log(sum);
