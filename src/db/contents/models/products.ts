import { Product } from '../../models';

export default async () => {
	try {
		await Product.create({});
	} catch (err) {
		console.log(err);
	}
};
