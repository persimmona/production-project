import { SelectOption } from '@/shared/ui/Select/Select';

export enum Currency {
    UAH = 'UAH',
    PLN = 'PLN',
}

export const currencySelectOptions: SelectOption<Currency>[] = [
    {
        readableValue: Currency.UAH,
        value: Currency.UAH,
    },
    {
        readableValue: Currency.PLN,
        value: Currency.PLN,
    },
];
