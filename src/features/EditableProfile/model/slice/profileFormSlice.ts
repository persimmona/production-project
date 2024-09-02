import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileFormSchema, ValidateProfileFormError } from '../types/profileForm';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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
    validateErrors: undefined,
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
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state) => {
                state.isLoading = false;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action: PayloadAction<ValidateProfileFormError[] | undefined>) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileFormActions } = profileFormSlice;
export const { reducer: profileFormReducer } = profileFormSlice;
