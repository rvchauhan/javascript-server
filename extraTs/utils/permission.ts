import { IgetUsers } from "../interfaces"
import { users } from '../constant'
function hasPermissions(module: IgetUsers, role: string, permissionType: string) {
    let k: any = module[permissionType];
    return k.forEach(element => {
        return element == role;
    });
}
export { hasPermissions };
