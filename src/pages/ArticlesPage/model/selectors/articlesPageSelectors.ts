import { RootSchema } from 'app/providers/store';
import { initialState } from '../slice/articlesPageSlice';

export const selectArticlesPageLoading = (state: RootSchema) => state.articlesPage?.isLoading;
export const selectArticlesPageError = (state: RootSchema) => state.articlesPage?.error;
export const selectArticlesPageLayout = (state: RootSchema) => state.articlesPage?.layout;
export const selectArticlesPageSearch = (state: RootSchema) => state.articlesPage?.search ?? '';
export const selectArticlesPageSortOrder = (state: RootSchema) => state.articlesPage?.sortOrder ?? initialState.sortOrder;
export const selectArticlesPageSortField = (state: RootSchema) => state.articlesPage?.sortField ?? initialState.sortField;
export const selectArticlesPageType = (state: RootSchema) => state.articlesPage?.type ?? initialState.type;
export const selectArticlesPagePagination = (state: RootSchema) => state.articlesPage?.pagination ?? initialState.pagination;
