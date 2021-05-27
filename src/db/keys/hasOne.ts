import { User, TypeProfile } from '../models/index';
export default () => {
	// usuarios at Roles_has_usuarios
	TypeProfile.hasOne(User, { foreignKey: 'typeProfile' });
	// type.hasOne(User, { foreignKey: 'Type' });
};
