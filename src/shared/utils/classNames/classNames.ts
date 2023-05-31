type Modes = Record<string, boolean | string | undefined>;

export const classNames = (mainClass: string, modes: Modes = {}, additionalClasses: Array<string | undefined> = []): string => {
    return [
        mainClass,
        ...additionalClasses,
        ...Object.entries(modes)
            .filter(([, isApplied]) => Boolean(isApplied))
            .map(([className]) => className),
    ].join(' ');
};
