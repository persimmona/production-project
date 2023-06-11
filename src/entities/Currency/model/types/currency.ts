import { SelectOption } from 'shared/ui/Select/Select';

export enum Currency {
    UAH = 'UAH',
    PLN = 'PLN',
}

export const currencySelectOptions: SelectOption[] = [
    {
        label: Currency.UAH,
        value: Currency.UAH,
    },
    {
        label: Currency.PLN,
        value: Currency.PLN,
    },
];
