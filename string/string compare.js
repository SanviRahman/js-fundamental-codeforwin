let str1="madam";
let str2="";

for(let i=str1.length-1; i>=0; i--)
{
    str2+=str1[i];
}

if(str1==str2){
    console.log("String is palindrome");
}
else{
    console.log("String is not palindrome");
}