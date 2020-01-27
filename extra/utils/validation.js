import validateEmail from './helper.js';
let validUser = [];
let invalidUser = [];



//validateuser(users);
function validateuser(users) {
    

     let valid = 0;
     let invalid = 0;
    users.forEach(element => {
        const { traineeEmail: tra, reviewerEmail: rie } = element
        let m = validateEmail(tra);
        let n = validateEmail(rie);

        if (m == true && n == true)
         {
            validUser.push({ tra, rie });
            valid++;
        } else
         {
            invalidUser.push({ tra, rie });
            invalid++;
          }
    });
    console.log("validuser:" + valid);
    validUser.forEach(element => {
        console.log("valid user Email:", element);
    });
    console.log("invaliduser:" +invalid);
    invalidUser.forEach(element => {
        console.log("invalid user Email:", element);
    });
}

 
export default validateuser;
