import { RootSchema } from '@/app/providers/store';

export const selectProfileError = (state: RootSchema) => state.profile?.error ?? '';
