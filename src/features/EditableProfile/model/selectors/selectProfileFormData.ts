import { RootSchema } from 'app/providers/store';
import { initialState } from '../slice/profileFormSlice';

export const selectProfileFormData = (state: RootSchema) => state.profileForm?.data ?? initialState.data;
