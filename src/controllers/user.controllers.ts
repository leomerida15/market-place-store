import { NextFunction, Request, Response } from 'express';
import { Product, TypeProfile, User } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const key: string = 'clave';

// getters all users
export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const info: intf.User[] = await User.findAll({
			include: [{ model: Product, as: 'Products' }],
			attributes: { exclude: ['password', 'id'] },
		});

		res.status(200).json({ message: Msg.User().getAll, info });
	} catch (err) {
		next(err);
	}
};

// getter a user
export const createUser = async (req: Request<any, intf.User, intf.User>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { password } = req.body;
		const salt: string = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(password, salt);

		const info: intf.User = await User.create(req.body);

		res.status(200).json({ msg: Msg.User().create, info });
	} catch (err) {
		next(err);
	}
};

// getter a user
export const getUser = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;

		const info: intf.User = await User.findByPk(id, {
			include: [{ model: Product, as: 'Products' }],
			attributes: { exclude: ['password', 'id'] },
		});
		if (!info) throw { message: `el id: ${id}; no existe en la tabla`, code: 400 };

		const msg: string = Msg.User(id).create;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// delete a user
export const deleteUser = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await User.destroy({ where: { id } });

		const msg: string = Msg.User(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};

// edit a user
export const editUser = async (req: Request<intf.id>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { id } = req.params;
		const info = await User.update({ where: { id } });

		const msg: string = Msg.User(id).delete;
		res.status(200).json({ msg, info });
	} catch (err) {
		next(err);
	}
};
