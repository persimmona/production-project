import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootSchema } from '@/app/providers/store';
import { ARTICLE_LAYOUT, Article, ArticleLayout, ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/const/common';
import { ARTICLES_PAGE_LAYOUT } from '@/shared/const/localstorage';

import { ArticlesAdvancedSearch } from '../../model/types/articlesPage';
import { ARTICLES_PAGE_LIMIT, DEFAULT_PAGINATION, initialState } from '../const/defaults';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesPageAdapter = createEntityAdapter<Article>({ selectId: (article) => article.id });

export const articlesPageSelector = articlesPageAdapter.getSelectors<RootSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

type UpdateStateValuePayload<T extends keyof ArticlesAdvancedSearch> = {
    uid: T;
    value: ArticlesAdvancedSearch[T];
};

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: initialState,
    reducers: {
        setLayout: (state, action: PayloadAction<ArticleLayout>) => {
            state.layout = action.payload;
            localStorage.setItem(ARTICLES_PAGE_LAYOUT, action.payload);
            state.pagination.limit = ARTICLES_PAGE_LIMIT[action.payload];
        },
        setAdvancedSearchValue: <T extends keyof ArticlesAdvancedSearch>(
            state: ArticlesAdvancedSearch,
            action: PayloadAction<UpdateStateValuePayload<T>>,
        ) => {
            state[action.payload.uid] = action.payload.value;
        },
        initState: (state, action: PayloadAction<URLSearchParams>) => {
            const sortOrder = action.payload.get('sortOrder');
            const sortField = action.payload.get('sortField');
            const type = action.payload.get('type');
            const search = action.payload.get('search');
            const layout = localStorage.getItem(ARTICLES_PAGE_LAYOUT) as ArticleLayout;

            state.layout = layout ?? ARTICLE_LAYOUT.GRID;
            state.pagination.limit = ARTICLES_PAGE_LIMIT[layout] ?? DEFAULT_PAGINATION.limit;

            if (sortOrder) state.sortOrder = sortOrder as SortOrder;
            if (sortField) state.sortField = sortField as ArticleSortField;
            if (search) state.search = search;
            if (type) state.type = type as ArticleType;
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
                if (state.pagination.page === 1) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                if (state.pagination.page === 1) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
                state.isLoading = false;
                state.pagination.hasMore = action.payload.length === state.pagination.limit;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
