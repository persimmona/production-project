import { createSlice } from '@reduxjs/toolkit';
import { fetchArtcileById } from '../services/fetchArticleById';
import { ArticleSchema } from '../types/article';

const initialState: ArticleSchema = {
    isLoading: false,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchArtcileById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArtcileById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchArtcileById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
