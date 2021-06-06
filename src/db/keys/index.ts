import hasMany from './hasMany';
import hasOne from './hasOne';

export default async () => {
	try {
		await hasMany();
		// await hasOne();
	} catch (err) {
		console.error(err);
	}
};
