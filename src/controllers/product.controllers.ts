import { NextFunction, Request, Response } from 'express';
import { Product } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';
import { ImgIDs, ImgMoves, ImgRoutes } from '../hooks/images';

// getters all Products
export const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.Product[] = await Product.findAll();

		res.status(200).json({ message: Msg.Product().getAll, info });
	} catch (err) {
		next(err);
	}
};

// getter a Product
export const createProduct = async (req: Request<any, any, intf.Product>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const imgs: string[] = await (async () => {
			if (req.files) {
				const routesIMG: string[] = ImgRoutes(req.files, 'zones');
				const ids = ImgIDs(routesIMG);
				//
				const urls: string[] = await ImgMoves(ids, 'products');

				return urls;
			} else {
				return [];
			}
		})();

		const data: any = { ...req.body, imgs };

		const info: intf.Product = await Product.create(data);

		res.status(200).json({ msg: Msg.Product(info.id).create, info });
	} catch (err) {
		next(err);
	}
};

// getter a Product
export const getProduct = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		const info: intf.Product = await Product.findOne({ where: { id } });
		if (!info) throw { message: `el id: ${id}; no existe en la tabla tipos`, code: 400 };

		const msg: string = Msg.Product(id).get;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// delete a Product
export const deleteProduct = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await Product.destroy({ where: { id } });

		const msg: string = Msg.Product(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// edit a Product
export const editProduct = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await Product.update({ where: { id } });

		const msg: string = Msg.Product(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};
