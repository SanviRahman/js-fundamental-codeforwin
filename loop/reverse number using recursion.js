function revErse(num)
{
    if(num==0)return;
    console.log(num);
    revErse(num-1);
}
revErse(5);