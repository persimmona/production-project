import { ARTICLE_LAYOUT, ARTICLE_SORT_FIELD, ArticleLayout } from 'entities/Article';
import { ArticlesAdvancedSearch, ArticlesPageSchema, Pagination } from '../types/articlesPage';
import { SORT_ORDER } from 'shared/const/common';

export const ARTICLES_PAGE_LIMIT: Record<ArticleLayout, number> = {
    [ARTICLE_LAYOUT.GRID]: 9,
    [ARTICLE_LAYOUT.LIST]: 4,
};

export const DEFAULT_PAGINATION: Pagination = {
    limit: ARTICLES_PAGE_LIMIT[ARTICLE_LAYOUT.GRID],
    page: 1,
    hasMore: false,
};

export const ARTICLES_PAGE_UID: Record<keyof ArticlesAdvancedSearch, keyof ArticlesAdvancedSearch> = {
    search: 'search',
    sortField: 'sortField',
    sortOrder: 'sortOrder',
    type: 'type',
} as const;

export const initialState: ArticlesPageSchema = {
    error: undefined,
    isLoading: false,
    entities: {},
    ids: [],
    layout: ARTICLE_LAYOUT.GRID,
    pagination: DEFAULT_PAGINATION,
    search: '',
    sortOrder: SORT_ORDER.ASC,
    sortField: ARTICLE_SORT_FIELD.TITLE,
    type: null,
};
