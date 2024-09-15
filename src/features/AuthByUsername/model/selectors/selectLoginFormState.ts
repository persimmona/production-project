import { RootSchema } from '@/app/providers/store';

import { initialState } from '../slice/loginFormSlice';

export const selectLoginFormState = (state: RootSchema) => state?.loginForm ?? initialState;
