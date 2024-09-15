import { ARTICLE_LAYOUT, ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/utils/classNames';

import { useGetArticleRecommendationsQuery } from '../../model/api/articleRecommendationsApi';

import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
    className?: string;
}

export const ArticleRecommendations = ({ className }: ArticleRecommendationsProps) => {
    const { isLoading, data: articles } = useGetArticleRecommendationsQuery();

    return (
        <ArticleList
            articles={articles ?? []}
            isLoading={isLoading}
            layout={ARTICLE_LAYOUT.GRID}
            className={classNames(cls.articleRecommendations, {}, [className])}
        />
    );
};
