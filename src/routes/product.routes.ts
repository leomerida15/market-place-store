import { Router } from 'express';
const router: Router = Router();

// controllers
import { getProducts, getProduct, deleteProduct, editProduct, createProduct } from '../controllers/Product.controllers';

//Product
router.route('/Product').get(getProducts).post(createProduct);
//
router.route('/Product/:id').get(getProduct).delete(deleteProduct).patch(editProduct);

export default router;
