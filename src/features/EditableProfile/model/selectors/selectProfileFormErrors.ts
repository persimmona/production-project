import { RootSchema } from 'app/providers/store';

export const selectProfileFormErrors = (state: RootSchema) => state.profileForm?.validateErrors;
