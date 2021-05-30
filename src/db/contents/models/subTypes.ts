import { SubType } from '../../models';

export default async () => {
	try {
		await SubType.create({ name: 'Teléfono', type: 1 });
		await SubType.create({ name: 'Laptop', type: 1 });
		await SubType.create({ name: 'Sedan', type: 2 });
		await SubType.create({ name: 'Camioneta', type: 2 });
	} catch (err) {
		console.log(err);
	}
};
