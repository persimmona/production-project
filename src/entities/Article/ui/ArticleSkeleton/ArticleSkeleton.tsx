import { classNames } from '@/shared/utils/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleSkeleton.module.scss';

interface ArticleSkeletonProps {
    className?: string;
}

export const ArticleSkeleton = ({ className }: ArticleSkeletonProps) => {
    return (
        <div className={classNames(cls.articleSkeleton, {}, [className])}>
            <Skeleton height='160px' width='160px' variant='circular' className={cls.articleImage}></Skeleton>

            <Skeleton className={cls.articleTitle} />

            <Skeleton className={cls.articleSubtitle} />

            <Skeleton className={cls.articleInfo} />
            <Skeleton className={cls.articleInfo} />

            <Skeleton height='300px' width='100%' className={cls.articleBlock}></Skeleton>
            <Skeleton height='300px' width='100%' className={cls.articleBlock}></Skeleton>
        </div>
    );
};
