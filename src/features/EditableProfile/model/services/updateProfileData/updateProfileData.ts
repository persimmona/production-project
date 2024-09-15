import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/store/config/RootSchema';
import { Profile } from '@/entities/Profile';

import { ValidateProfileFormError } from '../../types/profileForm';
import { validateFormData } from '../validateFormData';

export const updateProfileData = createAsyncThunk<void, Profile, ThunkConfig<ValidateProfileFormError[]>>(
    'profile/updateProfileData',
    async (profileData, thunkApi) => {
        const errors = validateFormData(profileData);

        if (errors.length) {
            return thunkApi.rejectWithValue(errors);
        }

        try {
            await thunkApi.extra.api.put('/profile/' + profileData?.id, profileData);
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue([ValidateProfileFormError.SERVER_ERROR]);
        }
    },
);
