import { SubType, Type, Product, User, TypeProfile } from '../models';

export default () => {
	// ejemplo

	// usuarios at Roles_has_usuarios
	Type.hasMany(SubType, { foreignKey: 'type', onDelete: 'cascade', hooks: true });
	SubType.hasMany(Product, { foreignKey: 'subType', onDelete: 'cascade', hooks: true });
	User.hasMany(Product, { foreignKey: 'user', onDelete: 'cascade', hooks: true });
	TypeProfile.hasMany(User, { foreignKey: 'typeProfile' });
};
