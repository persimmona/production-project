import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/utils/classNames';

import cls from './AppImage.module.scss';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    className?: string;
    fallback?: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
    const { src, alt, className, fallback, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
        };
    }, [src]);

    if (isLoading) {
        return fallback ?? <Skeleton className={classNames(cls.image, {}, [className])} />;
    }

    return <img src={src} alt={alt} className={classNames(cls.image, {}, [className])} {...otherProps} />;
};
