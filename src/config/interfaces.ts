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
	typeProfileId: number;
}

export interface Product extends db {
	//
	subTypeId: number;
	name: string;
	price: number;
	userId: number;
	imgs?: string[];
}

export interface Type extends db {
	//
	name: string;
	SubType?: SubType;
}

export interface SubType extends db {
	//
	name: string;
	typeId: number;
}

export interface TypeProfile extends db {
	//
	descript: string;
}
