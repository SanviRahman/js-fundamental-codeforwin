let num=parseInt(17);
let bool=1;

for(let i=2; i<num;i++)
{
    if(num%i==0){
        bool=0;
    }
}
if(bool==0)
{
    console.log(`${num} is not prime number.`);
}
else{
    console.log(`${num} is prime number.`);
}