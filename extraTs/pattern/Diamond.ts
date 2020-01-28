function diamond (n: number) : void
{
    if ( n < 11 && n > 1)
     {
        for ( let i : number = 0; i < n; i++ ) 
        {
            let b : string = " ";
            for ( let j : number = 0; j < n - i; j++ )
                b = b + " ";
            for ( let k = 0; k <= i; k++ )
                b = b + "* ";
            console.log(b);
        }
 
        for ( let i = n - 1; i > 0; i-- ) 
        {
            let b : string= " ";
            for (let j = 0; j < n - i; j++)
                b = b + " ";
            for (let k : number = 0; k < i; k++)
                b = b + " *";
            console.log(b);
        }
    } else {
        console.log( " wrong input " );
    }
} 

export default diamond; 
