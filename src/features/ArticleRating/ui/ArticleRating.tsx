import { RatingCard } from '@/entities/Rating';
import { selectUserAuthData } from '@/entities/User';
import { useGetArticleRatingByUser, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { classNames } from '@/shared/utils/classNames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleRating.module.scss';

interface ArticleRatingProps {
    articleId: string;
    className?: string;
}

export function ArticleRating(props: ArticleRatingProps) {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const userData = useSelector(selectUserAuthData);

    const { data, isLoading } = useGetArticleRatingByUser({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticle] = useRateArticle();

    const onRatingSubmit = useCallback(
        (rating: number) => {
            rateArticle({
                articleId,
                userId: userData?.id ?? '',
                rating,
            });
        },
        [articleId, rateArticle, userData?.id],
    );

    if (isLoading) {
        return <Skeleton width='100%' height='120px' />;
    }

    return (
        <RatingCard
            onSubmit={onRatingSubmit}
            selectedRating={data?.[0]?.rating}
            title={t('article:rate_article')}
            className={classNames(cls.articleRating, {}, [className])}
        />
    );
}
