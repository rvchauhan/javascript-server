import { permissions } from '../constant.js';
function hasPermissions(module, role, permissionType) {
    let k = permissions[module];
    let b = k[permissionType];
    return b.some(element => {
        return element == role;
    });
}

//console.log(hasPermissions('getUsers', 'trainee', 'read'));
export { hasPermissions } ;
