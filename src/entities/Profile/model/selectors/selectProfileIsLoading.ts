import { RootSchema } from 'app/providers/store';

export const selectProfileIsLoading = (state: RootSchema) => state.profile?.isLoading;
