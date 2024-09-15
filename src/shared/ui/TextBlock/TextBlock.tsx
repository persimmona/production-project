import { Header } from '@/shared/ui/Header';
import { P } from '@/shared/ui/P';
import { classNames } from '@/shared/utils/classNames';

import cls from './TextBlock.module.scss';

interface TextBlockProps {
    paragraphs: string[];
    title?: string;
    className?: string;
}

export const TextBlock = ({ paragraphs, title, className }: TextBlockProps) => {
    return (
        <div className={classNames(cls.textBlock, {}, [className])}>
            <Header tag='h2' className={cls.title}>
                {title}
            </Header>

            {paragraphs.map((paragraph) => (
                <P key={paragraph} className={cls.paragraph}>
                    {paragraph}
                </P>
            ))}
        </div>
    );
};
