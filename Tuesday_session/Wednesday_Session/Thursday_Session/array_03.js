let nums=[1,20,32,17,89,10,27,100];
// nums.sort((a,b)=>a-b);
// console.log(nums)

let max=0;
for(let i=0;i<nums.length;i++){
    if(max < nums[i]){
       max=nums[i];
    }
}
console.log(max);