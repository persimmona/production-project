import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/store/config/RootSchema';

interface LoginFormProps {
    username: string;
    password: string;
}

// literally action creator => return action
export const loginByUsername = createAsyncThunk<User, LoginFormProps, ThunkConfig<string>>(
    'loginForm/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(AUTH_USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
