export const User = (id?: number) => {
	const base: string = ' el usuario con el id: ' + id;
	return {
		getAll: 'todos los usuarios',
		create: 'Se a creado' + base,
		get: base,
		edit: 'Se a editado' + base,
		delete: 'Se a eliminado' + base,
		login: 'se creo ' + base,
	};
};

export const Type = (id?: number) => {
	const base: string = ' el tipos con el id: ' + id;
	return {
		getAll: 'todos los tipos',
		create: 'Se a creado' + base,
		get: base,
		edit: 'Se a editado' + base,
		delete: 'Se a eliminado' + base,
	};
};

export const SubType = (id?: number) => {
	const base: string = ' el subTipo con el id: ' + id;
	return {
		getAll: 'todos los subTipos',
		create: 'Se a creado' + base,
		get: base,
		edit: 'Se a editado' + base,
		delete: 'Se a eliminado' + base,
	};
};

export const TypeProfile = (id?: number) => {
	const base: string = ' el tipo de perfil con el id: ' + id;
	return {
		getAll: 'todos los tipo de perfil',
		create: 'Se a creado' + base,
		get: base,
		edit: 'Se a editado' + base,
		delete: 'Se a eliminado' + base,
	};
};

export const Product = (id?: number) => {
	const base: string = ' el Producto con el id: ' + id;
	return {
		getAll: 'todos los Productos',
		create: 'Se a creado' + base,
		get: base,
		edit: 'Se a editado' + base,
		delete: 'Se a eliminado' + base,
	};
};
