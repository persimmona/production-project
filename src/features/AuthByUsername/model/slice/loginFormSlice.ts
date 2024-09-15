import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../../model/services/loginByUsername';
import { LoginFormSchema } from '../../model/types/loginFormSchema';

export const initialState: LoginFormSchema = {
    isLoading: false,
    password: '',
    username: '',
};

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.username = '';
                state.password = '';
                state.error = undefined;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
