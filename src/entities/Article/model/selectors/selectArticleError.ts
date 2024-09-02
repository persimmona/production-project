import { RootSchema } from '@/app/providers/store';

export const selectArticleError = (state: RootSchema) => state.article?.error;
