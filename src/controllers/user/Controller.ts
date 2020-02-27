import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse'
import IRequest from '../../libs/routes/IRequest'
import config from '../../config/configuration'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import Iusercreate from './../../repositories/entities/Iusercreate'
import seedData from '../../libs/seedData'
import { JsonWebTokenError } from 'jsonwebtoken';
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

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('-----------------CREATE TRAINEE USER----------------:');
            const users: Iusercreate = req.body;
            const password = users.password;
            async function encodedPassword(password) {
                return await bcrypt.hash(password, 10)
            }
            const pass = await encodedPassword(password);
            Object.assign(users, { password: pass });
            const user = await this.userRepository.create(users)
            return SystemResponse.success(res, user, 'trainee added sucessfully');
        } catch (err) {
            return next({ error: err, message: err });
        }
    };

    list = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('-------------INSIDE LIST TRAINEE----------- ');
            const user = await this.userRepository.list()
            return SystemResponse.success(res, user, 'Users List');
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('------------INSIDE UPDATE TRAINEE-------------');
            const { id, dataToUpdate } = req.body;
            const user = await this.userRepository.update({ _id: id }, dataToUpdate)
            return SystemResponse.success(res, user, 'Updated user');
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside Delete Trainee :::::::: ');
            const { id } = req.params;
            const user = await this.userRepository.delete({ _id: id })
            return SystemResponse.success(res, user, 'User Deleted Successfully')
        } catch (err) {
            throw err;
        }
    };

    me = async (req: IRequest, res: Response, next: NextFunction) => {
        try {
            console.log(":::::::::::::::INSIDE ME::::::::::::::");
            console.log("req", req.user)
            return await SystemResponse.success(res, req.user, "your data")
        }
        catch (err) {
            return next({ error: err, message: err });
        }
    }

    login = async (req: IRequest, res: Response, next: NextFunction) => {
        try {
            console.log("::::::::::::INSIDE LOG IN::::::::::::");
            const { email, password } = req.body;
            const user = await this.userRepository.findone(email)
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = await jwt.sign({ id: user.id, email: user.email, exp: Math.floor(Date.now() / 1000) + 15 * 60 }, config.secretKey)
                if (!token) {
                    console.log("token is not generated")
                } else {
                    return SystemResponse.success(res, token, "token generated")
                }
                return SystemResponse.success(res, req.user, " Logged in");
            } else {
                console.log("not a User")
            }
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserController.getInstance();