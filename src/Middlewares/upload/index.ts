import { response } from 'express';
import multer, { diskStorage, StorageEngine, Options } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const storage: StorageEngine = diskStorage({
	destination: path.resolve('static'),
	filename: (req, file, cb) => cb(null, uuidv4() + '@' + file.originalname.replace(/ /gi, '_')),
});

const options: Options = {
	fileFilter: function (req, file, cb) {
		const filetypes = /jpeg|jpg|png|svg/;
		const mimetype = filetypes.test(file.mimetype);
		const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
		if (mimetype && extname) {
			return cb(null, true);
		} else {
			cb({
				name: file.originalname,
				message: 'Error: File upload only supports the following filetypes - ' + filetypes,
			});
		}
	},
	limits: { fileSize: 10000000 },
	storage,
};

export const upload = multer(options).single('image');

export const uploads = multer(options).array('images', 20);
