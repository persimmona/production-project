import { RootSchema } from 'app/providers/store';
import { DEFAULT_PAGINATION } from '../const/defaults';

export const selectArticlesPageLoading = (state: RootSchema) => state.articlesPage?.isLoading;
export const selectArticlesPageError = (state: RootSchema) => state.articlesPage?.error;
export const selectArticlesPageLayout = (state: RootSchema) => state.articlesPage?.layout;
export const selectArticlesPagePagination = (state: RootSchema) => state.articlesPage?.pagination ?? DEFAULT_PAGINATION;
