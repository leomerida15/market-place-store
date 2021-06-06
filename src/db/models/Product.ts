import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING, ARRAY } = DataTypes;

	return Sql.define(
		'Products',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			subTypeId: { type: INTEGER, allnwNull: true },
			name: { type: STRING, allowNull: false },
			price: { type: INTEGER, allowNull: false },
			userId: { type: INTEGER, allowNull: false },
			imgs: { type: ARRAY(STRING), allowNull: false },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
