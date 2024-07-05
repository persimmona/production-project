import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootSchema, ThunkConfig } from 'app/providers/store/config/RootSchema';
import { selectArticlesPageLoading, selectArticlesPagePagination } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>('fetchNextArticlesList', async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const pagination = selectArticlesPagePagination(getState() as RootSchema);
    const isLoading = selectArticlesPageLoading(getState() as RootSchema);

    if (pagination.hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(pagination.page + 1));
        dispatch(fetchArticlesList());
    }
});
