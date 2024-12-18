import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    readOnly: boolean;
    error?: string;
}
