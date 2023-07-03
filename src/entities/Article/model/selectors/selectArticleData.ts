import { RootSchema } from 'app/providers/store';

export const selectArticleData = (state: RootSchema) => state.article?.data;
