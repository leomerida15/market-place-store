import { TypeProfile } from '../../models';

export default async () => {
	try {
		await TypeProfile.create({ descript: 'admin' });
		await TypeProfile.create({ descript: 'client' });
	} catch (err) {
		console.log(err);
	}
};
