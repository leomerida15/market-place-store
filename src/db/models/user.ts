import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'Users',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			email: { type: STRING, allowNull: false, unique: true },
			password: { type: STRING, allowNull: false },
			typeProfile: { type: INTEGER, allowNull: false },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
