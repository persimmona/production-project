import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootSchema } from '@/app/providers/store';
import { Comment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentListSchema } from '../types/articleCommentListSchema';

// helps works with aeeay of data
const articleCommentListAdapter = createEntityAdapter<Comment>({ selectId: (comment) => comment.id });

export const selectArticleCommentList = articleCommentListAdapter.getSelectors<RootSchema>(
    (state) => state.articleCommentList || articleCommentListAdapter.getInitialState(),
);

const initialState: ArticleCommentListSchema = {
    error: undefined,
    isLoading: false,
    entities: {},
    ids: [],
};

const articleCommentListSlice = createSlice({
    name: 'articleCommentList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                articleCommentListAdapter.setAll(state, action.payload);
                state.isLoading = false;
            });
    },
});

export const { reducer: articleCommentListReducer } = articleCommentListSlice;
