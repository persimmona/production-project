import { ArticleLayout, ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/const/common';

export interface ArticleAdvancedSearchSchema {
    layout: ArticleLayout;
    sortField: ArticleSortField;
    sortOrder: SortOrder;
    search: string;
    type: ArticleType | null;
}

export type ArticleAdvancedSearchKeys = keyof ArticleAdvancedSearchSchema;
