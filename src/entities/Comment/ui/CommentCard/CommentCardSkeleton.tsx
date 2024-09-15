import { Avatar } from '@/shared/ui/Avatar';
import { P } from '@/shared/ui/P';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/utils/classNames';

import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

export const CommentCardSkeleton = ({ className }: CommentCardSkeletonProps) => {
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                <Skeleton variant='circular'>
                    <Avatar src='' size='small' variant='rounded' />
                </Skeleton>
                <Skeleton className={cls.username} width='100%'>
                    <P size='large'> </P>
                </Skeleton>
            </div>
            <Skeleton height='50px' width='100%' />
        </div>
    );
};
