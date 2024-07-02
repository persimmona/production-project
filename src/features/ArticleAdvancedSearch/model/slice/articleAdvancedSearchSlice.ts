import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ARTICLE_LAYOUT, ARTICLE_SORT_FIELD, ArticleLayout } from 'entities/Article';
import { SORT_ORDER } from 'shared/const/common';
import { ARTICLES_PAGE_LAYOUT } from 'shared/const/localstorage';
import { ArticleAdvancedSearchKeys, ArticleAdvancedSearchSchema } from '../types/articleAdvancedSearch';

export const initialState: ArticleAdvancedSearchSchema = {
    layout: ARTICLE_LAYOUT.GRID,
    search: '',
    sortOrder: SORT_ORDER.ASC,
    sortField: ARTICLE_SORT_FIELD.TITLE,
    type: null,
};

type UpdateStateValuePayload<T extends ArticleAdvancedSearchKeys> = {
    uid: T;
    value: ArticleAdvancedSearchSchema[T];
};

const articleAdvancedSearchSlice = createSlice({
    name: 'articleAdvancedSearch',
    initialState,
    reducers: {
        initState: (state) => {
            // TODO: get filters from query
            const layout = localStorage.getItem(ARTICLES_PAGE_LAYOUT) as ArticleLayout;
            state.layout = layout;
        },
        setStateValue: <T extends ArticleAdvancedSearchKeys>(
            state: ArticleAdvancedSearchSchema,
            action: PayloadAction<UpdateStateValuePayload<T>>,
        ) => {
            state[action.payload.uid] = action.payload.value;
        },
        setLayout: (state, action: PayloadAction<ArticleLayout>) => {
            state.layout = action.payload;
            localStorage.setItem(ARTICLES_PAGE_LAYOUT, action.payload);
        },
    },
});

export const { reducer: articleAdvancedSearchReducer, actions: articleAdvancedSearchActions } = articleAdvancedSearchSlice;
