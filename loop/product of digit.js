let num=parseInt(12345);

let ldigit,product=1;
 while(num!=0){
    ldigit=num%10;
    product=product*ldigit;
    num=Math.floor(num/10);
 }
 console.log("Product is:",product);
