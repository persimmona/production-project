import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleLayout } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    layout: ArticleLayout;
}
