import { RootSchema } from '@/app/providers/store';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { selectProfileFormData } from './selectProfileFormData';

test('should return profile form data', () => {
    const profileFormState: DeepPartial<RootSchema> = {
        profileForm: {
            data: {
                country: Country.Ukraine,
                currency: Currency.UAH,
                firstname: 'Alona',
                lastname: 'Sydorova',
                age: 23,
                city: 'Mariupol',
                username: 'admin',
                avatar: 'https://play-lh.googleusercontent.com/MDaSgXlbRkftfjNIdJ2oHodVBVLOmVg2PevfdzJkbtlawfMA-8gMAs-kCfXXY5XyLw',
            },
        },
    };

    expect(selectProfileFormData(profileFormState as RootSchema)).toEqual(profileFormState.profileForm?.data);
});
