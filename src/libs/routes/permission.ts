import permissions from './constant';
import { IgetUsers } from "../../../extraTs/interfaces"
function hasPermissions(modul: string, role: string, permissionType: string) {
    const m = permissions[modul];
    let k: any = m[permissionType];
    return k.some(element => {
        return element === role;
    });
}
export default hasPermissions ;