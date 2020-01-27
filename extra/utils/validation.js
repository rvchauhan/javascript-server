const users = [
    {
        traineeEmail: "trainee1@successive.tech",
        reviewerEmail: "reviewer1@successive.tech"
    },
    {
        traineeEmail: "trainee2@successiveriv.tech",
        reviewerEmail: "reviewer2@successive.tech"
    },
    {
        traineeEmail: "trainee3@successive.tech",
        reviewerEmail: "reviewer3@successive.tech"
    }
]
function validateEmail(b) {
    const regex = /([a-zA-z0-9\+_.@])+@successive.tech/gm;
    let a = regex.test(b);
    if (a == true) {
        return true;
    } else {
        return false;
    }
}

const validUser = [];
const invalidUser = [];

validateuser(users);
function validateuser(users) {
    let valid = 0;
    let invalid = 0;


    users.forEach(element => {
        const { traineeEmail: tra, reviewerEmail: rie } = element
        let m = validateEmail(tra);
        let n = validateEmail(rie);

        if (m == true && n == true) {
            validUser.push({ tra, rie });
            valid++;
        } else {
            invalidUser.push({ tra, rie });
            invalid++;

        }
    });
    console.log("validuser:" + valid);
    validUser.forEach(element => {
        console.log("valid user Email:", element);
    });
    console.log("invaliduser:" + invalid);
    invalidUser.forEach(element => {
        console.log("invalid user Email:", element);
    });

} 
