import { RootSchema } from 'app/providers/store';

export const selectLoginFormState = (state: RootSchema) => state.loginForm;
