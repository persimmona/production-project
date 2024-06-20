import { RootSchema } from 'app/providers/store';

export const selectArticlesPageLoading = (state: RootSchema) => state.articlesPage?.isLoading;
export const selectArticlesPageError = (state: RootSchema) => state.articlesPage?.error;
export const selectArticlesPageLayout = (state: RootSchema) => state.articlesPage?.layout;
