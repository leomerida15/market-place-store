import { Application } from 'express';

// rputers
import Users from './users.routes';
import Type from './type.routes';
import SubType from './subType.routes';
import TypeProfile from './typeProfile.routes';
import Product from './product.routes';
import auth from './auth.routes';
//
export default (app: Application) => {
	app.use(Users);
	app.use(Type);
	app.use(SubType);
	app.use(TypeProfile);
	app.use(Product);
	app.use(auth);
};
