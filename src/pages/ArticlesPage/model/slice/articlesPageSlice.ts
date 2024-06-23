import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootSchema } from 'app/providers/store';
import { ARTICLE_LAYOUT, Article, ArticleLayout } from 'entities/Article';
import { ARTICLES_PAGE_LAYOUT } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../../model/types/articlesPage';
import { ARTICLES_PAGE_LIMIT, DEFAULT_PAGINATION } from '../const/defaults';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

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
    pagination: DEFAULT_PAGINATION,
};

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setLayout: (state, action: PayloadAction<ArticleLayout>) => {
            state.layout = action.payload;
            localStorage.setItem(ARTICLES_PAGE_LAYOUT, action.payload);
            state.pagination.limit = ARTICLES_PAGE_LIMIT[action.payload];
        },
        initState: (state) => {
            const layout = localStorage.getItem(ARTICLES_PAGE_LAYOUT) as ArticleLayout;
            state.layout = layout;
            state.pagination.limit = ARTICLES_PAGE_LIMIT[layout];
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.pagination.page = action.payload;
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
                articlesPageAdapter.addMany(state, action.payload);
                state.isLoading = false;
                state.pagination.hasMore = action.payload.length === state.pagination.limit;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
