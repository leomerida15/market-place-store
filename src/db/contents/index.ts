import typeProfile from './models/typeProfiles';
import types from './models/types';
import subTypes from './models/subTypes';
// import products from './models/products';
export default async (model: any) => {
	try {
		await typeProfile();
		await types();
		await subTypes();
		// await products();
	} catch (err) {
		console.log(err);
	}
};
