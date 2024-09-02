import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

export const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendations: builder.query<Article[], void>({
            query: () => ({
                url: '/articles',
                params: {
                    _limit: 4,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendationsQuery } = articleRecommendationsApi;
