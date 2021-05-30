import { Type } from '../../models';

export default async () => {
	try {
		await Type.create({ name: 'Informática' });
		await Type.create({ name: 'vehiculos' });
	} catch (err) {
		console.log(err);
	}
};
