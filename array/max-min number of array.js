let arr=[20,10,60,30,40,50];

// let mx,mn;
// arr.sort();
// for(let i=0; i<arr.length; i++)
// {
//     mn=arr[0];
//     mx=arr[arr.length-1];
 
// }
// console.log("Min:",mn);
// console.log("Max:",mx);

let mx=arr[0],mn=arr[0];
for(let i=0; i<arr.length;i++)
{
    if(arr[i]>mx){
        mx=arr[i];
    }
    if(arr[i]<mn){
        mn=arr[i];
    }
}

console.log("Min:",mn);
console.log("Max:",mx);
