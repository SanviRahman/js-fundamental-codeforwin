let num=parseInt(12345);

let sum=0,fdigit=0;

let ldigit=num%10;
let i=0; 
while(i<num){
    num=num/10;
    if(num<10){
        fdigit=Math.floor(num);
    }
    i++;
}
sum=fdigit+ldigit;
console.log(sum);