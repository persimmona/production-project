import { classNames } from 'shared/utils/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    size: 'small' | 'medium';
    variant: 'rounded' | 'square';
    alt?: string;
    className?: string;
}

export const Avatar = ({ src, variant, size, alt, className }: AvatarProps) => {
    return (
        <div className={classNames(cls.avatarWrapper, {}, [className, cls[variant], cls[size]])}>
            <img alt={alt} className={cls.avatar} src={src} />
        </div>
    );
};
