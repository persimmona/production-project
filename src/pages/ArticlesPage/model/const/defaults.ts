import { ARTICLE_LAYOUT, ArticleLayout } from 'entities/Article';
import { ArticlesAdvancedSearch, Pagination } from '../types/articlesPage';

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
