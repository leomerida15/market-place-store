import { Router } from 'express';
const router: Router = Router();

// controllers
import { getUsers, getUser, deleteUser, editUser, createUser } from '../controllers/user.controllers';

//User
router.route('/user').get(getUsers).post(createUser);
//
router.route('/user/:id').get(getUser).delete(deleteUser).patch(editUser);

export default router;
