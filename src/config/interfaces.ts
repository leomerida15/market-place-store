export interface id {
	id: number;
}

export interface db {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface User extends db {
	email: string;
	password: string;
}

export interface Product extends db {
	//
	subType: number;
	name: string;
	price: number;
	img: string;
}

export interface Type extends db {
	//
	name: string;
	SubType?: SubType;
}

export interface SubType extends db {
	//
	name: string;
	type: number;
}

export interface TypeProfile extends db {
	//
	descript: string;
}
