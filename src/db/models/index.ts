import user from './user';
import typeProfile from './TypeProfile';
import type from './type';
import subType from './subType';
import product from './Product';
//
export default () => {
	return {
		User: user(),
		TypeProfile: typeProfile(),
		Type: type(),
		SubType: subType(),
		Product: product(),
	};
};

export const User = user();
//
export const TypeProfile = typeProfile();
//
export const Type = type();
//
export const SubType = subType();
//
export const Product = product();
