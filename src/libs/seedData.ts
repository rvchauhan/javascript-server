import UserRepository from '../repositories/user/UserRepository'
const userRepository= new UserRepository
export default () => {
  const user = {
    "name": 'trainee',
    "address": 'Noida',
    "dob": new Date('12-04-1998'),
    "mobile_number": 9717043261,
    "email": 'chauhanravi814@gmail.com',
    "hobbies": ["motovlogging"],
  };
  console.log(user);
  userRepository.count().then((count) => {
    console.log('count as', count);

    if (!count) {
      return userRepository.create(user)
        .then((res) => {
        console.log('User added successfully',res);
      });
}
console.log('User already exist');
  })
.catch(err=> console.log(err))
};
