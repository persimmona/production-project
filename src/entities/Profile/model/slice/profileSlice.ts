import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';
import { fetchProfileData } from 'entities/Profile/model/services/fecthProfileData';

const initialState: ProfileSchema = {
    isLoading: true,
    readOnly: true,
    data: undefined,
    error: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
