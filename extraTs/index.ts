import { diamond, equilateral } from './pattern/';
import { hasPermissions, validateuser } from './utils';
import { users, getUsers } from './constant';
diamond(5);
equilateral(5);
console.log(hasPermissions(getUsers, 'trainee', 'read'));
validateuser(users);
