import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';
import { AUTH_USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(AUTH_USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            localStorage.removeItem(AUTH_USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
