import Sql from '../connections';
import { DataTypes } from 'sequelize';

export default () => {
	const { INTEGER, STRING } = DataTypes;

	return Sql.define(
		'Users',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			email: {
				type: STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: {
						args: true,
						msg: 'El campo tiene que ser un correo valido',
					},
				},
			},
			password: { type: STRING, allowNull: false },
			typeProfileId: { type: INTEGER, allowNull: false },
		},
		{ freezeTableName: true, timestamps: true }
	);
};
