import { ArticleAdvancedSearchKeys } from '../types/articleAdvancedSearch';

export const ARTCLE_ADVANCED_SEARCH_UID: Record<ArticleAdvancedSearchKeys, ArticleAdvancedSearchKeys> = {
    layout: 'layout',
    search: 'search',
    sortField: 'sortField',
    sortOrder: 'sortOrder',
    type: 'type',
} as const;
