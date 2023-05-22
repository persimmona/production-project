import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { AUTH_USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginFormProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginFormProps, { rejectValue: string }>(
    'loginForm/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(AUTH_USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
