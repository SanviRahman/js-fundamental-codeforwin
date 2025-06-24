let num=parseInt(123);

let ldigit=0;
let sum=0;

while(num!=0)
{
    ldigit=num%10;
    sum=sum*10+ldigit;
    num=Math.floor(num/10);
}

console.log("Reverse number is:",sum);