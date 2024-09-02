import { Profile } from '@/entities/Profile';

export interface ProfileFormSchema {
    data: Profile;
    validateErrors?: ValidateProfileFormError[];
    isLoading: boolean;
}

export enum ValidateProfileFormError {
    INCORRECT_USER_DATA = 'incorrect_user_data',
    INCORRECT_AGE = 'incorrect_age',
    SERVER_ERROR = 'server_error',
}
