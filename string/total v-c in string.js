let str="i love codeforwin";

let vowel=consonent=0;
for(let i=0; i<str.length;i++)
{
    if(str[i]=='a' || str[i]=='e'|| str[i]=='i'
        || str[i]=='o' || str[i]=='u'
    )
    {
        vowel++;
    }
    else{
        consonent++;
    }
}
console.log("Vowel:",vowel);
console.log("Consonent:",consonent);