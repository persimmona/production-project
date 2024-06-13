import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileFormError } from '../../types/profileForm';

test('should successfully save profile data', async () => {
    const formData = {
        id: '1',
        country: Country.Ukraine,
        currency: Currency.UAH,
        firstname: 'Alona',
        lastname: 'Sydorova',
        age: 23,
        city: 'Mariupol',
        username: 'admin',
        avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockResolvedValue({ data: formData });

    const result = await thunk.callThunk(formData);

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.setProfileData(formData));
    expect(result.meta.requestStatus).toBe('fulfilled');
});

test('should return server error', async () => {
    const formData = {
        id: '1',
        country: Country.Ukraine,
        currency: Currency.UAH,
        firstname: 'Alona',
        lastname: 'Sydorova',
        age: 23,
        city: 'Mariupol',
        username: 'admin',
        avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockRejectedValue(new Error('Some server error'));

    const result = await thunk.callThunk(formData);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileFormError.SERVER_ERROR]);
});

test('should return validation error before saving data', async () => {
    const formData = {
        id: '1',
        country: Country.Ukraine,
        currency: Currency.UAH,
        firstname: '',
        lastname: 'Sydorova',
        age: 23,
        city: 'Mariupol',
        username: 'admin',
        avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
    };

    const thunk = new TestAsyncThunk(updateProfileData);

    const result = await thunk.callThunk(formData);

    expect(result.payload).toEqual([ValidateProfileFormError.INCORRECT_USER_DATA]);
});
