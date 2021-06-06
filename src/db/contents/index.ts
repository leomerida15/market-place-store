import typeProfile from './models/typeProfiles';
import types from './models/types';
import subTypes from './models/subTypes';
import Users from './models/Users';
// import products from './models/products';
export default async (model: any) => {
	try {
		await typeProfile();
		await types();
		await subTypes();
		await Users();
	} catch (err) {
		console.log(err);
	}
};
