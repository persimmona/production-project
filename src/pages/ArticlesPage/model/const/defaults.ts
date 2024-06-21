import { ARTICLE_LAYOUT, ArticleLayout } from 'entities/Article';
import { Pagination } from '../types/articlesPage';

export const ARTICLES_PAGE_LIMIT: Record<ArticleLayout, number> = {
    [ARTICLE_LAYOUT.GRID]: 9,
    [ARTICLE_LAYOUT.LIST]: 4,
};

export const DEFAULT_PAGINATION: Pagination = {
    limit: ARTICLES_PAGE_LIMIT[ARTICLE_LAYOUT.GRID],
    page: 1,
    hasMore: true,
};
