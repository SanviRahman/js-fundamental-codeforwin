let num=parseInt(121);
let originalNum=num;


let ldigit=0,sum=0;

for(;num!=0;){
    ldigit=num%10;
    sum=sum*10+ldigit;
    num=Math.floor(num/10);
}
if(originalNum==sum){
    console.log(`${originalNum} is palindrome`);
}
else{
    console.log(`${originalNum} is not palindrome`);
}