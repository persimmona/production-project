import { User } from 'entities/User';
import { ARTICLE_LAYOUT, ARTICLE_SORT_FIELD, ArticleBlockType, ArticleType } from '../consts/articleConsts';

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

export type ArticleLayout = (typeof ARTICLE_LAYOUT)[keyof typeof ARTICLE_LAYOUT];

export type ArticleSortField = (typeof ARTICLE_SORT_FIELD)[keyof typeof ARTICLE_SORT_FIELD];
