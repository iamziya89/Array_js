let left_Num=[1,3,4,3,2,5,7,1];
let right_num=[];


// Print first repeating numbers
for(let i=0; i<left_Num.length ; i++){
    if(right_num.includes(left_Num[i])){ 
    console.log(left_Num[i])
    break
} else{
    right_num.push(left_Num[i]);
}
}
