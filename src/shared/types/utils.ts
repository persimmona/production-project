export type OptionalPropertyOf<T extends object> = Exclude<
    {
        [K in keyof T]: T extends Record<K, T[K]> ? never : K;
    }[keyof T],
    undefined
>;

export type HTMLElementValue = string | number;
