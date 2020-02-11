import permissions from './constant';
import { IgetUsers } from "../../../extraTs/interfaces"
function hasPermissions(module: IgetUsers, role: string, permissionType: string) {
    let k: any = module[permissionType];
    return k.some(element => {
        return element == role;
    });
}
export { hasPermissions };
