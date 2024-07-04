import { SelectOption } from 'shared/ui/Select/Select';

export enum Country {
    Ukraine = 'Ukraine',
    Poland = 'Poland',
    England = 'England',
}

export const countrySelectOptions: SelectOption<Country>[] = [
    {
        label: Country.Ukraine,
        value: Country.Ukraine,
    },
    {
        label: Country.Poland,
        value: Country.Poland,
    },
    {
        label: Country.England,
        value: Country.England,
    },
];
