import { UserSchema } from 'entities/User';
import { LoginFormSchema } from 'features/AuthByUsername';

export interface RootSchema {
    user: UserSchema;
    loginForm: LoginFormSchema;
}
