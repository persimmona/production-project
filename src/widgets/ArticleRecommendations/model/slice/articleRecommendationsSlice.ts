import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootSchema } from 'app/providers/store';
import { Article } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleRecommendationsSchema } from '../types/articleCommentListSchema';

// helps works with aeeay of data
const articleRecommendationsAdapter = createEntityAdapter<Article>({ selectId: (comment) => comment.id });

export const selectArticleRecommendations = articleRecommendationsAdapter.getSelectors<RootSchema>(
    (state) => state.articleRecommendations || articleRecommendationsAdapter.getInitialState(),
);

const initialState: ArticleRecommendationsSchema = {
    error: undefined,
    isLoading: false,
    entities: {},
    ids: [],
};

const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                articleRecommendationsAdapter.setAll(state, action.payload);
                state.isLoading = false;
            });
    },
});

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
