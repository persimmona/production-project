import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddCommnetFormSchema } from '../types/addCommentForm';

const initialState: AddCommnetFormSchema = {
    text: '',
};

const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state: AddCommnetFormSchema, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
