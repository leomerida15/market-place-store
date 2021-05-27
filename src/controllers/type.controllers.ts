import { NextFunction, Request, Response } from 'express';
import { Product, SubType, Type } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';

// getters all Types
export const getTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.Type[] = await Type.findAll({ include: SubType });

		res.status(200).json({ message: Msg.Type().getAll, info });
	} catch (err) {
		next(err);
	}
};

// getter a Type
export const createType = async (req: Request<any, intf.Type>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.Type = await Type.create(req.body);

		res.status(200).json({ msg: Msg.Type(info.id).create, info });
	} catch (err) {
		next(err);
	}
};

// getter a Type
export const getType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		const info: intf.Type = await Type.findAll({ where: { id }, include: SubType });
		if (!info) throw { message: `el id: ${id}; no existe en la tabla tipos`, code: 400 };

		const msg: string = Msg.Type(id).get;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// delete a Type
export const deleteType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		// const ids_subTypes: any[] = await SubType.findAll({ where: { type: id }, attributes: ['id'] });
		// const ids_Products: any[] = await Product.findAll({ where: { type: id }, attributes: ['id'] });

		const info: number = await Type.destroy({ where: { id } });

		const msg: string = Msg.Type(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// edit a Type
export const editType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await Type.update({ where: { id } });

		const msg: string = Msg.Type(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};
