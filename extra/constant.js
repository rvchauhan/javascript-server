const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    }
};
let users = [
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
export { users, permissions }