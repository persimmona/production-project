import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon';
import { P } from 'shared/ui/P';
import { TextBlock } from 'shared/ui/TextBlock';
import { classNames } from 'shared/utils/classNames';
import { ARTICLE_LAYOUT, Article, ArticleBlockType, ArticleLayout, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    variant: ArticleLayout;
    className?: string;
}

export function ArticleListItem(props: ArticleListItemProps) {
    const { article, className, variant } = props;
    const { t } = useTranslation();

    const renderArticleTypes = () => {
        return <P className={cls.types}>{article.type.join(', ')}</P>;
    };

    const renderViewsAmount = () => {
        return (
            <P className={cls.viewsAmountWrapper}>
                {article.views}
                <Icon Svg={EyeIcon} />
            </P>
        );
    };

    if (variant === ARTICLE_LAYOUT.GRID) {
        return (
            <Card className={classNames(cls.grid, {}, [cls.articleListItem, className])}>
                <AppLink to={AppRoutesPath[AppRoutes.ARTICLE_DETAILS] + article.id} color={AppLinkColor.TEXT}>
                    <div className={cls.imageWrapper}>
                        <img className={cls.img} src={article.img} alt={article.title} />
                        <P className={cls.createdAt}>{article.createdAt}</P>
                    </div>
                    <div className={cls.contentWrapper}>
                        {renderArticleTypes()}
                        {renderViewsAmount()}
                    </div>
                    <P>{article.title}</P>
                </AppLink>
            </Card>
        );
    }

    const renderTextBlock = () => {
        const firstTextBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        if (!firstTextBlock) {
            return null;
        }
        return <TextBlock className={cls.textBlock} paragraphs={firstTextBlock.paragraphs} />;
    };

    return (
        <Card className={classNames(cls.list, {}, [cls.articleListItem, className])}>
            <P className={cls.header}>
                <Avatar size='small' src={article.user.avatar ?? ''} variant='rounded' alt={article.user.username} />
                <span>{article.user.username}</span>
                <span className={cls.createdAt}>{article.createdAt}</span>
            </P>
            <P size='large'>{article.title}</P>
            {renderArticleTypes()}
            <img src={article.img} alt={article.title} className={cls.img} />
            {renderTextBlock()}
            <div className={cls.footer}>
                <AppLink to={AppRoutesPath[AppRoutes.ARTICLE_DETAILS] + article.id} color={AppLinkColor.TEXT}>
                    <Button variant='outline'>{t('read_more')}</Button>
                </AppLink>
                {renderViewsAmount()}
            </div>
        </Card>
    );
}
