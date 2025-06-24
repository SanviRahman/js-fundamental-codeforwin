let num=parseInt(123);

let ldigit,sum=0;
 while(num!=0){
    ldigit=num%10;
    sum=sum+ldigit;
    num=Math.floor(num/10);
 }
 console.log("Sum is:",sum);

