import { useTranslation } from 'react-i18next';

import { P } from '@/shared/ui/P';
import { classNames } from '@/shared/utils/classNames';

import { ArticleListSkeleton } from './ArticleListSkeleton';
import { ARTICLE_LAYOUT } from '../../model/consts/articleConsts';
import { Article, ArticleLayout } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    layout?: ArticleLayout;
    isLoading?: boolean;
    className?: string;
}

export function ArticleList(props: ArticleListProps) {
    const { articles, isLoading = false, layout = ARTICLE_LAYOUT.GRID, className } = props;
    const { t } = useTranslation();

    const renderArticleList = () => {
        if (!articles.length && !isLoading) {
            return <P size='large'>{t('not_found')}</P>;
        }
        return articles.map((article) => <ArticleListItem key={article.id} article={article} variant={layout} />);
    };

    return (
        <section className={classNames(cls.articleList, {}, [cls[layout], className])} data-testid='ArticleList'>
            {renderArticleList()}
            {isLoading && <ArticleListSkeleton layout={layout} />}
        </section>
    );
}
