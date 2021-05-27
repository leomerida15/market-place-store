import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'Types',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			name: { type: STRING, allowNull: false, unique: true },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
