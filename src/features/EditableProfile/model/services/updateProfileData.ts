import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/RootSchema';
import { Profile, profileActions } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<void, Profile, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (profileData, thunkApi) => {
        try {
            await thunkApi.extra.api.put('/profile', profileData);

            thunkApi.dispatch(profileActions.setProfileData(profileData));
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue('cannot_save_profile');
        }
    },
);
