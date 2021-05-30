import { Router } from 'express';
import { createUser, login } from '../controllers/auth.controllers';
const router: Router = Router();

// auth
router.route('/auth/login').post(login);
//
router.route('/auth/register').post(createUser);
//
export default router;
