import { NextFunction, Request, Response } from 'express';
import { Product, SubType } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';

// getters all SubTypes
export const getSubTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.SubType[] = await SubType.findAll({ include: { model: Product, as: 'Products' } });

		res.status(200).json({ message: Msg.SubType().getAll, info });
	} catch (err) {
		next(err);
	}
};

// getter a SubType
export const createSubType = async (req: Request<any, intf.SubType>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.SubType = await SubType.create(req.body);

		res.status(200).json({ msg: Msg.SubType(info.id).create, info });
	} catch (err) {
		next(err);
	}
};

// getter a SubType
export const getSubType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		const info: intf.SubType = await SubType.findAll({ where: { id } });
		if (!info) throw { message: `el id: ${id}; no existe en la tabla tipos`, code: 400 };

		const msg: string = Msg.SubType(id).get;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// delete a SubType
export const deleteSubType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await SubType.destroy({ where: { id } });

		const msg: string = Msg.SubType(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// edit a SubType
export const editSubType = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await SubType.update({ where: { id } });

		const msg: string = Msg.SubType(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};
