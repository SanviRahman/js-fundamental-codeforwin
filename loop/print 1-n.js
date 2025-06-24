let input = window.prompt("Enter the number:");

let num = parseInt(input);
let i=0;
let sum=0;
while(i<=num){
    sum+=i;
    i++;
}
document.write(sum);
