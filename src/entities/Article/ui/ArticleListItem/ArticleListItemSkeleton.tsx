import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card/Card';
import { P } from '@/shared/ui/P';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/utils/classNames';
import { ARTICLE_LAYOUT } from '../../model/consts/articleConsts';
import { ArticleLayout } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    variant: ArticleLayout;
}

export function ArticleListItemSkeleton(props: ArticleListItemSkeletonProps) {
    const { variant, className } = props;

    if (variant === ARTICLE_LAYOUT.GRID) {
        return (
            <Card className={classNames(cls.grid, {}, [cls.articleListItem, className])}>
                <div className={cls.imageWrapper}>
                    <Skeleton variant='rectangular' height='200px' width='100%' />
                </div>
                <Skeleton className={cls.types} />
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.list, {}, [cls.articleListItem, className])}>
            <P className={cls.header}>
                <Skeleton variant='circular'>
                    <Avatar src='' size='small' variant='rounded' />
                </Skeleton>
                <Skeleton width='60px' />
                <Skeleton width='50px' className={cls.createdAt} />
            </P>
            <P size='large'>
                <Skeleton />
            </P>
            <Skeleton className={cls.types} />
            <div className={cls.img}>
                <Skeleton variant='rectangular' height='300px' width='100%' />
            </div>
            <Skeleton height='200px' width='100%' />
            <div className={cls.footer}>
                <Skeleton height='40px' width='100px' />
                <Skeleton width='30px' />
            </div>
        </Card>
    );
}
