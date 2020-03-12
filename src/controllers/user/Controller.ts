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
<<<<<<< HEAD
=======

>>>>>>> 86fa1069470d148aa714e1a224d875f69aa87abb
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
<<<<<<< HEAD
                    return  SystemResponse.success(res, token, "token generated")
                }
                return  SystemResponse.success(res, req.user, " Logged in");
=======
                    return SystemResponse.success(res, token, "token generated")
                }
                return SystemResponse.success(res, req.user, " Logged in");
>>>>>>> 86fa1069470d148aa714e1a224d875f69aa87abb
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
