import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootSchema, ThunkConfig } from 'app/providers/store/config/RootSchema';
import { Article } from 'entities/Article';
import { DEFAULT_PAGINATION } from '../../const/defaults';
import { selectArticlesPagePagination } from '../../selectors/articlesPageSelectors';

type Args = {
    page: number;
};

export const fetchArticlesList = createAsyncThunk<Article[], Args, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (args, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const pagination = selectArticlesPagePagination(getState() as RootSchema);

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: pagination.limit,
                    _page: args.page ?? DEFAULT_PAGINATION.page,
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
