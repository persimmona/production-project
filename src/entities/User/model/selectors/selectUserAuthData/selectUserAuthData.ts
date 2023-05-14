import { RootSchema } from 'app/providers/store';

export const selectUserAuthData = (state: RootSchema) => state.user.authData;
