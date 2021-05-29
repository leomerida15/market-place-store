import { Router } from 'express';
const router: Router = Router();

// controllers
import { getProducts, getProduct, deleteProduct, editProduct, createProduct } from '../controllers/Product.controllers';
import { uploads } from '../Middlewares/upload/index';

//Product
router.route('/Product').get(getProducts).post(uploads, createProduct);
//
router.route('/Product/:id').get(getProduct).delete(deleteProduct).patch(editProduct);

export default router;
