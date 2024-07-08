import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootSchema, ThunkConfig } from 'app/providers/store/config/RootSchema';
import { Article } from 'entities/Article';
import { DEFAULT_PAGINATION } from '../../const/defaults';
import {
    selectArticlesPagePagination,
    selectArticlesPageSearch,
    selectArticlesPageSortField,
    selectArticlesPageSortOrder,
    selectArticlesPageType,
} from '../../selectors/articlesPageSelectors';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const sortOrder = selectArticlesPageSortOrder(getState() as RootSchema);
        const sortField = selectArticlesPageSortField(getState() as RootSchema);
        const search = selectArticlesPageSearch(getState() as RootSchema);
        const type = selectArticlesPageType(getState() as RootSchema);
        const pagination = selectArticlesPagePagination(getState() as RootSchema);

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: pagination.limit,
                    _page: pagination.page ?? DEFAULT_PAGINATION.page,
                    _sort: sortField,
                    _order: sortOrder,
                    type,
                    q: search,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
