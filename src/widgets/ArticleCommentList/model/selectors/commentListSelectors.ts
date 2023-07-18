import { RootSchema } from 'app/providers/store';

export const selectArticleCommentListIsLoading = (state: RootSchema) => state.articleCommentList?.isLoading;
export const selectArticleCommentListError = (state: RootSchema) => state.articleCommentList?.error;
