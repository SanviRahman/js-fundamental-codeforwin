let num=parseInt(1234);

let div=0,sum=0;
let digit=0;

div=num%10;
for(let i=0; i<num; i++)
{
    num=num/10;
    if(num<10){
        digit=Math.floor(num);
    }
}
sum=digit+div;


console.log(`First digit:${digit} and last digit:${div}`);
console.log(sum);
