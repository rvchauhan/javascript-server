import permissions from './constant';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    for (let i = 0; i < permissions[moduleName][permissionType].length; i++) {
        if (permissions[moduleName][permissionType][i].match(role)) {
            return true;
        }
    }
    return false;
} 