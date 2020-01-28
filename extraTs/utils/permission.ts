import {IgetUsers} from "../interfaces"
import { users} from '../constant'
function hasPermissions ( module: any, role :string, permissionType : string )
 {
    let k : any = module[permissionType];

    return k.some(element => {
        return element == role;
    });
 }
export { hasPermissions } ;
