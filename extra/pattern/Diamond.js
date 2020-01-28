// let r = Number(process.argv[2]);
// diamond(r);
function diamond(n) 
{
    if ( n < 11 && n > 1)
     {
        for ( let i = 0; i < n; i++ ) 
        {
            let b = " ";
            for ( let j = 0; j < n - i; j++ )
                b = b + " ";
            for ( let k = 0; k <= i; k++ )
                b = b + "* ";
            console.log(b);
        }
 
        for ( let i = n - 1; i > 0; i-- ) 
        {
            let b = " ";
            for (let j = 0; j < n - i; j++)
                b = b + " ";
            for (let k = 0; k < i; k++)
                b = b + " *";
            console.log(b);
        }
    } else {
        console.log( " wrong input " );
    }
} 
export default diamond; 
