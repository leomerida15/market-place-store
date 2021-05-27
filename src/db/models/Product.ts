import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'Product',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			subType: { type: INTEGER, allnwNull: true },
			name: { type: STRING, allowNull: false },
			price: { type: INTEGER, allowNull: false },
			user: { type: INTEGER, allowNull: false },
			img: { type: STRING, allowNull: false },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
