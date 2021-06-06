import { SubType } from '../../models';

export default async () => {
	try {
		await SubType.create({ name: 'Teléfono', typeId: 1 });
		await SubType.create({ name: 'Laptop', typeId: 1 });
		await SubType.create({ name: 'Sedan', typeId: 2 });
		await SubType.create({ name: 'Camioneta', typeId: 2 });
	} catch (err) {
		console.log(err);
	}
};
