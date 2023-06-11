import { Profile } from 'entities/Profile';

export interface ProfileFormSchema {
    data: Profile;
    validateErrors: string;
    isLoading: boolean;
}
