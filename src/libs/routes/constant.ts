import { Ipermissions, Iusers } from '../../../extraTs/interfaces';
const permissions: Ipermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
export default permissions;
