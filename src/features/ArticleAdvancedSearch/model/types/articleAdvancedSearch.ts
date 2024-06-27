import { ArticleLayout } from 'entities/Article';

export interface ArticleAdvancedSearchSchema {
    layout: ArticleLayout;
    sortField: string;
    sortOrder: string;
    search: string;
}
