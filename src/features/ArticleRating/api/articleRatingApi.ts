import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingByUserArgs {
    userId: string;
    articleId: string;
}

interface RateArticleArgs {
    userId: string;
    articleId: string;
    rating: number;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRatingByUser: build.query<Rating[], GetArticleRatingByUserArgs>({
            query: (args) => ({
                url: '/article-ratings',
                params: args,
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArgs>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
});

export const useGetArticleRatingByUser = articleRatingApi.useGetArticleRatingByUserQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
