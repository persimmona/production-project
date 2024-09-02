import { RootSchema } from '@/app/providers/store';

export const selectArticleIsLoading = (state: RootSchema) => state.article?.isLoading;
