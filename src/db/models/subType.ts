import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'SubTypes',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			type: { type: INTEGER, allowNull: false },
			name: { type: STRING, allowNull: false, unique: true },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
