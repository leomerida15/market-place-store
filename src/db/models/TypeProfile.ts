import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'TypeProfiles',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			descript: { type: STRING, allowNull: false },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
