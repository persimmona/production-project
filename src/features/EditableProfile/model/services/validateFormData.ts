import { Profile } from 'entities/Profile';
import { ValidateProfileFormError } from '../types/profileForm';

export const validateFormData = (data: Profile) => {
    const { age, firstname, lastname, username } = data;

    const errors: ValidateProfileFormError[] = [];

    if (!firstname || !lastname || !username) {
        errors.push(ValidateProfileFormError.INCORRECT_USER_DATA);
    }

    if (!age || age < 4 || age > 90) {
        errors.push(ValidateProfileFormError.INCORRECT_AGE);
    }

    return errors;
};
