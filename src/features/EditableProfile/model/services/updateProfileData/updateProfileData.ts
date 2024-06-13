import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/config/RootSchema';
import { Profile, profileActions } from 'entities/Profile';
import { validateFormData } from '../validateFormData';
import { ValidateProfileFormError } from '../../types/profileForm';

export const updateProfileData = createAsyncThunk<void, Profile, ThunkConfig<ValidateProfileFormError[]>>(
    'profile/updateProfileData',
    async (profileData, thunkApi) => {
        const errors = validateFormData(profileData);

        if (errors.length) {
            return thunkApi.rejectWithValue(errors);
        }

        try {
            await thunkApi.extra.api.put('/profile/' + profileData?.id, profileData);

            thunkApi.dispatch(profileActions.setProfileData(profileData));
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue([ValidateProfileFormError.SERVER_ERROR]);
        }
    },
);
