import { RootSchema } from 'app/providers/store';

export const selectArticleRecommendationsIsLoading = (state: RootSchema) => state.articleRecommendations?.isLoading;
export const selectArticleRecommendationsError = (state: RootSchema) => state.articleRecommendations?.error;
