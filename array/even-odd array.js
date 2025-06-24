let arr=[1,2,3,4,5,6,7,8,9];


let cnt1=cnt2=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        cnt1++;
    }
    if(arr[i]%2==1){
        cnt2++;
    }
}
console.log("Even array:",cnt1);
console.log("Odd array:",cnt2);