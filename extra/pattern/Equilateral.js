// let n = Number(process.argv[2]);
// equilateral(n);
function equilateral(b) {
    //let n = prompt("enter value of n");
    if(b > 2 && b < 11)
    {
for(let i = 1;i <= b;i++)
{
    let s = "";
 for(let j = 1;j <= b-i; j++)
 {
 s=s + " ";
 }
 for(let k = 0; k < 2 * i - 1;k++)
 {
  if(k % 2 == 0)
    s = s + "*";
    else
    s = s + " "
 }
 console.log(s);
}
 }
   else {
        console.log("wrong choice");
    }
}

export default equilateral;
