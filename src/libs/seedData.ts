import UserRepository from '../repositories/user/UserRepository'
import * as bcrypt from 'bcrypt'
import UserController from '../controllers/user/Controller'
import config from '../config/configuration'
const userRepository = new UserRepository
export default async () => {

  const ecncryptPassword: string = await UserController.encodedPassword(config.Password)
  const user = {
    "name": 'trainee',
    "address": 'Noida',
    "dob": new Date('12-04-1998'),
    "mobile_number": 9717043261,
    "email": 'chauhanravi814@gmail.com',
    "hobbies": ["motovlogging"],
    "password": ecncryptPassword
  };
  console.log(user);
  userRepository.count().then((count) => {
    console.log('count as', count);
    if (!count) {
      userRepository.create(user)
        .then((res) => {
          console.log('User added successfully', res);
        });
    }
    else {
      console.log('User already exist');
    }
  })
    .catch(err => console.log(err))
}

