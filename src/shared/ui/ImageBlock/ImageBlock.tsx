import { classNames } from '@/shared/utils/classNames';
import { P } from '@/shared/ui/P';
import { Image } from '@/shared/ui/Image';
import cls from './ImageBlock.module.scss';

interface ImageBlockProps {
    src: string;
    title?: string;
    className?: string;
}

export const ImageBlock = ({ src, title, className }: ImageBlockProps) => {
    return (
        <div className={classNames(cls.imageBlock, {}, [className])}>
            <Image src={src} alt={title} className={cls.image} />
            {title && <P size='small'>{title}</P>}
        </div>
    );
};
