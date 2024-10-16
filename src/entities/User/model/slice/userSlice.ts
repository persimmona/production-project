import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AUTH_USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

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

            state._inited = true;
        },
        logout: (state) => {
            localStorage.removeItem(AUTH_USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
