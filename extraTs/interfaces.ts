interface Ipermissions {
    getUsers: IgetUsers
}
interface IgetUsers {
    all: Irole;
    read: Irole;
    write: Irole;
    delete: Irole;
}
interface Irole {
    [index: number]: string;
}
interface Iusers {
    traineeEmail: string;
    reviewerEmail: string;

}
interface IvalidUser {
    [index: number]: string;
}

export { Ipermissions, IgetUsers, Iusers, IvalidUser };