import { RootSchema } from 'app/providers/store';

export const selectUserInited = (state: RootSchema) => state.user._inited;
