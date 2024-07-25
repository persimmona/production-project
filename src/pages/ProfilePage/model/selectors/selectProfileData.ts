import { RootSchema } from 'app/providers/store';

export const selectProfileData = (state: RootSchema) => state.profile?.data;
