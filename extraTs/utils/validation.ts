import validateEmail from './helper';
import { IvalidUser } from '../interfaces'
let validUser: IvalidUser[] = [];
let invalidUser: IvalidUser[] = [];
function validateuser(users: any) {
    users.forEach(element => {
        const { traineeEmail: tra, reviewerEmail: rie } = element
        let m: boolean = validateEmail(tra);
        let n: boolean = validateEmail(rie);
        if (m == true && n == true) {
            validUser.push([tra, rie]);
        } else {
            invalidUser.push([tra, rie]);
        }
    });
    console.log(" validuser:" + validUser.length);
    validUser.forEach(element => {
        console.log(" valid user Email :", element);
    });
    console.log(" invaliduser: " + invalidUser.length);
    invalidUser.forEach(element => {
        console.log(" invalid user Email: ", element);
    });
}
export default validateuser;
