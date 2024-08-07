import { useEffect } from 'react';

export function useInitialEffect(callback: () => void, args: unknown[] = []) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...args]);
}
