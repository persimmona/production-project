import { AppImage } from '@/shared/ui/AppImage';
import { classNames } from '@/shared/utils/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    size: 'small' | 'medium' | 'large' | 'extra-large';
    variant: 'rounded' | 'square';
    alt?: string;
    className?: string;
}

export const Avatar = ({ src, variant, size, alt, className }: AvatarProps) => {
    return (
        <span className={classNames(cls.avatarWrapper, {}, [className, cls[variant], cls[size]])}>
            <AppImage alt={alt} src={src} />
        </span>
    );
};
