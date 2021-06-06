import { SubType, Type, Product, User, TypeProfile } from '../models';
import sql from '../index';

export default async () => {
	// ejemplo

	// usuarios at Roles_has_usuarios
	await Type.hasMany(SubType, { as: 'SubTypes', foreignKey: 'typeId' });
	await SubType.belongsTo(Type, { as: 'type', foreignKey: 'typeId' });

	await SubType.hasMany(Product, { as: 'Products', foreignKey: 'subTypeId' });
	await Product.belongsTo(SubType, { as: 'subType' });

	await User.hasMany(Product, { foreignKey: 'userId' });
	await Product.belongsTo(User, { as: 'user' });

	await TypeProfile.hasMany(User, { foreignKey: 'typeProfileId' });
	await User.belongsTo(TypeProfile, { as: 'typeProfile' });
};
