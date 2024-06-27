import { User } from 'entities/User';

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}

export interface ArticleSchema {
    isLoading: boolean;
    data?: Article;
    error?: string;
}

export const ARTICLE_LAYOUT = {
    GRID: 'grid',
    LIST: 'list',
} as const;

export type ArticleLayout = (typeof ARTICLE_LAYOUT)[keyof typeof ARTICLE_LAYOUT];

export const ARTICLE_SORT_FIELD = {
    TITLE: 'title',
    VIEWS: 'views',
    CREATED_AT: 'createdAt',
};
export type ArticleSortField = (typeof ARTICLE_SORT_FIELD)[keyof typeof ARTICLE_SORT_FIELD];
