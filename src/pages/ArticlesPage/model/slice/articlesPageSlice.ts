import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootSchema } from 'app/providers/store';
import { ARTICLE_LAYOUT, Article, ArticleLayout } from 'entities/Article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { ArticlesPageSchema } from '../../model/types/articlesPage';

const articlesPageAdapter = createEntityAdapter<Article>({ selectId: (article) => article.id });

export const articlesPageSelector = articlesPageAdapter.getSelectors<RootSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

const initialState: ArticlesPageSchema = {
    error: undefined,
    isLoading: false,
    entities: {},
    ids: [],
    layout: ARTICLE_LAYOUT.GRID,
};

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setLayout: (state, action: PayloadAction<ArticleLayout>) => {
            state.layout = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                articlesPageAdapter.setAll(state, action.payload);
                state.isLoading = false;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
