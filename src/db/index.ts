import sequelize from './connections';
import init_models from './models';
import keys from './keys';
import pre_into from './contents';
//

const models = init_models();

(async () => {
	// inits se buscan y creon o conecta con las tablas en la db

	// crea la sllaves foraneas y primarias
	await keys();

	// determina si la db se borrara completa y quedara limpia eliminar al subir a produccion
	const force: boolean = true;
	// se inicia la db
	const resp: any = await sequelize.sync({ force });

	if (resp) console.log('Init DB SUCCESS');
	else console.log('Init DB err');

	console.clear();

	interface obj {
		boy: string;
		dad: string;
		key: string;
	}

	const objs: obj[] = [
		{ dad: 'TypeProfiles', boy: 'Users', key: 'typeProfileId' },
		{ dad: 'Types', boy: 'SubTypes', key: 'typeId' },
		{ dad: 'SubTypes', boy: 'Products', key: 'userId' },
		{ dad: 'Users', boy: 'Products', key: 'subTypeId' },
	];

	const queryString: string = objs
		.map((obj: obj) => {
			return `
			alter table "${obj.boy}"
			add constraint FK_${obj.dad}_${obj.boy}
			foreign key ("${obj.key}")
			references "${obj.dad}" (id);
	 	`;
		})
		.join('');

	await sequelize.query(queryString);

	if (force) await pre_into(models);
	//
})();

export default models;
