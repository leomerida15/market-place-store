import hasMany from './hasMany';
import hasOne from './hasOne';

export default async () => {
	try {
		hasMany();
		hasOne();
	} catch (err) {
		console.error(err);
	}
};
