type Modes = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  modes: Modes = {},
  additionalClasses: string[] = []
): string => {
  return [
    mainClass,
    ...additionalClasses,
    ...Object.entries(modes)
      .filter(([, isApplied]) => Boolean(isApplied))
      .map(([className]) => className),
  ].join(" ");
};
