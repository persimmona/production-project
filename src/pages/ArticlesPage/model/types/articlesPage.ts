import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleLayout, ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/const/common';

export interface Pagination {
    limit: number;
    page: number;
    hasMore: boolean;
}

export interface ArticlesAdvancedSearch {
    sortField: ArticleSortField;
    sortOrder: SortOrder;
    search: string;
    type: ArticleType | null;
}

export interface ArticlesPageSchema extends EntityState<Article>, ArticlesAdvancedSearch {
    isLoading?: boolean;
    error?: string;
    pagination: Pagination;
    layout: ArticleLayout;
}
