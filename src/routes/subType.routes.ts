import { Router } from 'express';
const router: Router = Router();

// controllers
import { getSubTypes, getSubType, deleteSubType, editSubType, createSubType } from '../controllers/subType.controllers';

//SubType
router.route('/subType').get(getSubTypes).post(createSubType);
//
router.route('/subType/:id').get(getSubType).delete(deleteSubType).patch(editSubType);

export default router;
