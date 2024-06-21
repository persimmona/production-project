import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleLayout } from 'entities/Article';

export interface Pagination {
    limit: number;
    page: number;
    hasMore: boolean;
}

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    layout: ArticleLayout;
    pagination: Pagination;
}
