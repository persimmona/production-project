import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { CodeBlock } from '@/shared/ui/CodeBlock';
import { Header } from '@/shared/ui/Header';
import { Icon } from '@/shared/ui/Icon';
import { ImageBlock } from '@/shared/ui/ImageBlock';
import { P } from '@/shared/ui/P';
import { TextBlock } from '@/shared/ui/TextBlock';
import { classNames } from '@/shared/utils/classNames';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import { Article, ArticleBlock } from '../../model/types/article';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    article: Article;
    className?: string;
}

export const ArticleDetails = ({ article, className }: ArticleDetailsProps) => {
    const { img, createdAt, views, title, subtitle, blocks } = article;

    const renderArticleBlock = (block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <CodeBlock key={block.id} text={block.code} className={cls.block} />;
            case ArticleBlockType.IMAGE:
                return <ImageBlock key={block.id} src={block.src} title={block.title} className={cls.block} />;
            case ArticleBlockType.TEXT:
                return <TextBlock key={block.id} paragraphs={block.paragraphs} title={block.title} className={cls.block} />;
            default:
                return null;
        }
    };

    return (
        <section className={classNames(cls.articleDetails, {}, [className])} data-testid='ArticleDetails'>
            <Avatar size='extra-large' src={img} variant='rounded' className={cls.articleImage} />
            <Header tag='h1' className={cls.articleTitle} testId='ArticleDetails.Header'>
                {title}
            </Header>
            <P size='large' className={cls.articleSubtitle}>
                {subtitle}
            </P>
            <div className={cls.articleInfo}>
                <Icon Svg={EyeIcon} />
                <P>{views}</P>
            </div>
            <div className={cls.articleInfo}>
                <Icon Svg={CalendarIcon} />
                <P>{createdAt}</P>
            </div>
            {blocks.map(renderArticleBlock)}
        </section>
    );
};
