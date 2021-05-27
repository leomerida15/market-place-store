import { NextFunction, Request, Response } from 'express';
import { TypeProfile } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';

// getters all TypeProfiles
export const getTypeProfiles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.TypeProfile[] = await TypeProfile.findAll();

		res.status(200).json({ message: Msg.TypeProfile().getAll, info });
	} catch (err) {
		next(err);
	}
};

// getter a TypeProfile
export const createTypeProfile = async (
	req: Request<any, intf.TypeProfile>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const info: intf.TypeProfile = await TypeProfile.create(req.body);

		res.status(200).json({ msg: Msg.TypeProfile(info.id).create, info });
	} catch (err) {
		next(err);
	}
};

// getter a TypeProfile
export const getTypeProfile = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		const info: intf.TypeProfile = await TypeProfile.findAll({ where: { id } });
		if (!info) throw { message: `el id: ${id}; no existe en la tabla`, code: 400 };

		const msg: string = Msg.TypeProfile(id).create;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// delete a TypeProfile
export const deleteTypeProfile = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await TypeProfile.destroy({ where: { id } });

		const msg: string = Msg.TypeProfile(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// edit a TypeProfile
export const editTypeProfile = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await TypeProfile.update({ where: { id } });

		const msg: string = Msg.TypeProfile(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};
