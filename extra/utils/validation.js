import validateEmail from './helper.js';
let validUser = [];
let invalidUser = [];
function validateuser( users )
 {
    users.forEach(element => {
        const { traineeEmail: tra, reviewerEmail: rie } = element
        let m = validateEmail( tra );
        let n = validateEmail( rie );
if ( m == true && n == true )
        {
            validUser.push({ tra, rie });
        } else
         {
            invalidUser.push({ tra, rie });
         }
    });
    console.log(" validuser:" + validUser.length);
    validUser.forEach(element => {
        console.log(" valid user Email :", element);
    });
    console.log(" invaliduser: " + invalidUser.length );
    invalidUser.forEach(element => {
        console.log(" invalid user Email: " , element);
    });
 }
export default validateuser;
