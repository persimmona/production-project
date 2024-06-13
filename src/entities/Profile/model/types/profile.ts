import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
    id?: string;
    firstname: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    readOnly: boolean;
    error?: string;
}
