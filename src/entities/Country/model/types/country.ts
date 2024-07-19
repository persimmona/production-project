import { SelectOption } from 'shared/ui/Select/Select';

export enum Country {
    Ukraine = 'Ukraine',
    Poland = 'Poland',
    England = 'England',
}

export const countrySelectOptions: SelectOption<Country>[] = [
    {
        readableValue: Country.Ukraine,
        value: Country.Ukraine,
    },
    {
        readableValue: Country.Poland,
        value: Country.Poland,
    },
    {
        readableValue: Country.England,
        value: Country.England,
    },
];
