import { classNames } from '@/shared/utils/classNames';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { CommentCardSkeleton } from '../../ui/CommentCard/CommentCardSkeleton';

import cls from './CommentList.module.scss';

interface CommentListProps {
    comments: Comment[];
    isLoading?: boolean;
    className?: string;
}

export const CommentList = ({ comments, isLoading, className }: CommentListProps) => {
    if (isLoading) {
        return (
            <article className={classNames(cls.commentList, {}, [className])}>
                <CommentCardSkeleton />
                <CommentCardSkeleton />
            </article>
        );
    }

    return (
        <article className={classNames(cls.commentList, {}, [className])}>
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </article>
    );
};
