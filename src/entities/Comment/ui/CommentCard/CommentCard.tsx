import { Avatar } from 'shared/ui/Avatar';
import { P } from 'shared/ui/P';
import { classNames } from 'shared/utils/classNames';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    comment: Comment;
    className?: string;
}

export const CommentCard = ({ comment, className }: CommentCardProps) => {
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size='small' variant='rounded' />}
                <P size='large' className={cls.username}>
                    {comment.user.username}
                </P>
            </div>
            <P>{comment.text}</P>
        </div>
    );
};
