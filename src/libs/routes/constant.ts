import { Ipermissions, Iusers } from '../../../extraTs/interfaces';
const permissions: Ipermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer','head-trainer'],
        write: ['trainer','head-trainer'],
        delete: ['head-trainer'],
    }
};
export default permissions;
