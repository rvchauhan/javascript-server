import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse'
class UserController {
    static instance: UserController;
    static userRepository: UserRepository;
    userRepository = new UserRepository();
    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('-----------------CREATE TRAINEE USER----------------:');
            const { email, name, address, hobbies, dob, mobile_number } = req.body;
            this.userRepository.create({
                email, name, address, dob, mobile_number, hobbies
            })
                .then(user => {
                    return SystemResponse.success(res, user, 'trainee added sucessfully');
                }).catch(error => {
                    throw error;
                });
        } catch (err) {
            return next({ error: err, message: err });
        }
    };
    list = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('-------------INSIDE LIST TRAINEE----------- ');
            this.userRepository.list().then(user => {
                console.log(user);
                return SystemResponse.success(res, user, 'Users List');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    };
    update = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('------------INSIDE UPDATE TRAINEE-------------');
            const { id, dataToUpdate } = req.body;
            this.userRepository.update({ _id: id }, dataToUpdate).then(user => {
                return SystemResponse.success(res, user, 'Updated user');
            }).catch(error => { 
                throw error;
            });
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    };
    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside Delete Trainee :::::::: ');
            const { id } = req.params;
            this.userRepository.delete({ _id: id }).then(user => {
                return SystemResponse.success(res, user, 'User Deleted Successfully')
            });
        } catch (err) {
            throw err;
        }
    };
}
export default UserController.getInstance();