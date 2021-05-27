import { Router } from 'express';
const router: Router = Router();

// controllers
import { getTypes, getType, deleteType, editType, createType } from '../controllers/type.controllers';

//Type
router.route('/type').get(getTypes).post(createType);
//
router.route('/type/:id').get(getType).delete(deleteType).patch(editType);

export default router;
