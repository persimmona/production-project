export const ARTICLE_SORT_FIELD = {
    TITLE: 'title',
    VIEWS: 'views',
    CREATED_AT: 'createdAt',
} as const;
export const ARTICLE_LAYOUT = {
    GRID: 'grid',
    LIST: 'list',
} as const;
export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}
export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}
