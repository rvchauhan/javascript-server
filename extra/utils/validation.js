const users = [
    {
        traineeemail: "trainee1@successive.tech",
        revieweremail: "reviewer1@successive.tech"
    },
    {
        traineeemail: "trainee1@successive.tech",
        revieweremail: "reviewer1@successive.tech"
    },
    {
        traineeemail: "trainee1@successive.tech",
        revieweremail: "reviewer1@successive.tech"
    }
]
function validateEmail(b) {
    const regex = /([a-zA-z0-9\+_.@])+@successive.tech/gm;
    let a = regex.test(b);
    if (a == true) {
        return true;
    }
    else {
        return false;
    }
}


validateuser(users);
function validateuser(users) {
    let valid = 0;
    let invalid = 0;
    
   
    users.forEach(element => {
        const {traineeEmail:tra, reviewerEmail: rie}=element
        let m = validateEmail(tra);
        let n = validateEmail(rie);
        
        if (m == true && n == true) {
            valid++;
            console.log("valid user Email:");
        } else {
            invalid++;
            console.log("invalid user Email:");
        }
    });
        console.log("invaliduser:"+invalid);
        console.log("validuser:"+valid);


}