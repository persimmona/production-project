import { classNames } from 'shared/utils/classNames';
import cls from './Image.module.scss';

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
}

export const Image = ({ src, alt, className }: ImageProps) => {
    return <img src={src} alt={alt} className={classNames(cls.image, {}, [className])} />;
};
