export const USER_ROLE = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER',
} as const;
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
