import { User } from '../../models';

export default async () => {
	try {
		await User.create({
			email: 'admin@admin.com',
			// la clave es admin123.
			password: '$2b$10$eydT.wbYjANqaAeVDCxQTeXAVydvU6568LigZ.9/qtA.dTI4jyMuK',
			typeProfileId: 1,
		});
		await User.create({
			email: 'client@client.com',
			// la clave es clinet123.
			password: '$2b$10$8NiEaZtTXAfLpLp5opFYFuE3K3URd12Gjn74fB4U1oa.tcX/2wd7W',
			typeProfileId: 1,
		});
	} catch (err) {
		console.log(err);
	}
};
