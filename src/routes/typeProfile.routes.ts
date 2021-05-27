import { Router } from 'express';
const router: Router = Router();

// controllers
import {
	getTypeProfiles,
	getTypeProfile,
	deleteTypeProfile,
	editTypeProfile,
	createTypeProfile,
} from '../controllers/TypeProfile.controllers';

//TypeProfile
router.route('/typeProfile').get(getTypeProfiles).post(createTypeProfile);
//
router.route('/typeProfile/:id').get(getTypeProfile).delete(deleteTypeProfile).patch(editTypeProfile);

export default router;
