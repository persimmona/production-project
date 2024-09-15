import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootSchema, ThunkConfig } from '@/app/providers/store/config/RootSchema';
import { Comment } from '@/entities/Comment';
import { selectUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '@/widgets/ArticleCommentList';

type Args = {
    text: string;
    articleId: string | undefined;
};

export const addCommentForArticle = createAsyncThunk<Comment, Args, ThunkConfig<string>>(
    'ArticleDetailsPage/addCommentForArticle',
    async (args, thunkApi) => {
        const { dispatch, rejectWithValue, extra, getState } = thunkApi;
        const { articleId, text } = args;

        const userData = selectUserAuthData(getState() as RootSchema);

        if (!text || !articleId || !userData) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(articleId));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
