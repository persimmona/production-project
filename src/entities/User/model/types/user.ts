import { USER_ROLE } from '../consts/userConsts';

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles: UserRole[];
}

export interface UserSchema {
    _inited: boolean;
    authData?: User;
}
