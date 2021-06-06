import { NextFunction, Request, Response } from 'express';
import { User } from '../db/models';
import * as intf from '../config/interfaces';
import * as Msg from '../hooks/messages/index.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const key: string = 'clave';

// login
export const login = async (req: Request<any, intf.User, intf.User>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { password, email } = req.body;

		const info: intf.User = await User.findOne({ email });

		const valid: boolean = await bcrypt.compare(password, info.password);
		if (!valid) throw { message: 'contraseña incorrecta' };

		const { id, typeProfileId } = info;
		const token: string = jwt.sign({ email, id, typeProfileId }, key);

		res.status(200).json({ msg: Msg.User(info.id).login, info: { email, id: info.id }, token });
	} catch (err) {
		next(err);
	}
};

// getter a user
export const createUser = async (req: Request<any, intf.User, intf.User>, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { password, email } = req.body;
		const salt: string = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(password, salt);

		await User.create(req.body);

		const info: intf.User = await User.findOne({ email });

		res.status(200).json({ msg: Msg.User().create, info });
	} catch (err) {
		next(err);
	}
};
