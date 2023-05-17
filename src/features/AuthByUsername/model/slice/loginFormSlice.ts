import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginFormSchema } from 'features/AuthByUsername/model/types/loginFormSchema';

const initialState: LoginFormSchema = {
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
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
