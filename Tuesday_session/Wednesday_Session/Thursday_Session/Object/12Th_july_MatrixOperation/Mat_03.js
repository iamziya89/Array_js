let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
// let sum=0;
// for(let i=0; i<matrix.length;i++){
//     for(let j=0 ; j<matrix[0].length ; j++){
//         if(i+j===3){
//             sum+=matrix[i][j]
//         }
//     }
// }
// console.log(sum)

// // Above problem from another method
// let sum=0;
// let start=matrix[0].length-1;
// for(let i=0; i<matrix.length;i++){
//     sum+=matrix[i][start];
//     start-=1;
// }
// console.log(sum);



// //   printing in snake method  Output like(1 2 3 4 8 7 6 5 9 10 11 12 16 15 14 13)
// for(let i=0; i<matrix.length;i++){
//     if(i%2==0){
//         for(j=0;j<matrix[0].length;j++){
//             console.log(matrix[i][j]);
//         }
//     }else{
//         for(j=matrix[0].length-1;j>=0;j--){
//             console.log(matrix[i][j]);
//         }
//     }
// }






// // printing in snake method  Output like( 4 3 2 1 5 6 7 8 12 11 10 13 14 15 16)
// for(let i=0; i<matrix.length;i++){
//     if(i%2==0){
//         for(j=matrix[0].length-1;j>=0;j--){
//             console.log(matrix[i][j]);
//         }

//     }else{
//         for(j=0;j<matrix[0].length;j++){
//             console.log(matrix[i][j]);
//         }
//     }
// }

