import { Request } from 'express';
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
interface User {
    id: string;
    name: string;
}

interface NewRequest extends Request {
    user: User;
}
export { Ipermissions, IgetUsers, Iusers, IvalidUser,User,NewRequest };