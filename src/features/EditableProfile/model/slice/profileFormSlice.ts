import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileFormSchema } from '../types/profileForm';
import { updateProfileData } from 'features/EditableProfile/model/services/updateProfileData';

export const initialState: ProfileFormSchema = {
    data: {
        age: 0,
        avatar: '',
        city: '',
        country: Country.Ukraine,
        currency: Currency.UAH,
        firstname: '',
        lastname: '',
        username: '',
    },
    isLoading: false,
    validateErrors: '',
};

const profileFormSlice = createSlice({
    name: 'profileForm',
    initialState,
    reducers: {
        setProfileFormData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
        },
        changeProfileForm: (state, action: PayloadAction<Partial<Profile>>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validateErrors = '';
            })
            .addCase(updateProfileData.fulfilled, (state) => {
                state.isLoading = false;
                state.validateErrors = '';
            })
            .addCase(updateProfileData.rejected, (state) => {
                state.isLoading = false;
                state.validateErrors = '';
            });
    },
});

export const { actions: profileFormActions } = profileFormSlice;
export const { reducer: profileFormReducer } = profileFormSlice;
