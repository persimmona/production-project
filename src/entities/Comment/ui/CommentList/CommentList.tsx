import { classNames } from 'shared/utils/classNames';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { CommentCardSkeleton } from '../../ui/CommentCard/CommentCardSkeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    comments: Comment[];
    isLoading?: boolean;
    className?: string;
}

export const CommentList = ({ comments, isLoading, className }: CommentListProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCardSkeleton />
                <CommentCardSkeleton />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
    );
};
