import { diamond } from './pattern/index.js';
import { equilateral } from './pattern/index.js';
import { hasPermissions } from './utils/index.js';
import { validateuser } from './utils/index.js';
import { users} from './constant.js';

diamond(5);
equilateral(5);

console.log(hasPermissions('getUsers', 'trainee', 'read'));



validateuser(users);
