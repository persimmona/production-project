import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/RootSchema';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>('profile/fetchProfileData', async (_, thunkApi) => {
    try {
        const resonse = await thunkApi.extra.api('/profile');

        if (!resonse.data) {
            throw new Error();
        }

        return resonse.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('cannot_show_profile');
    }
});
