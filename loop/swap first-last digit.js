let num=parseInt(12345);

let temp,fdigit,ldigit=0;

ldigit=num%10;
for(let i=0; i<num; i++)
{
    num=num/10;
    if(num<10){
        fdigit=Math.floor(num);
    }
}
console.log("Before swap:",fdigit,ldigit);

temp=fdigit;
fdigit=ldigit;
ldigit=temp;

console.log("After swap:",fdigit,ldigit);