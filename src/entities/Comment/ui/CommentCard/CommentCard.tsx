import { AppRoutesPath } from 'shared/const/routes';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
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
            <AppLink to={`${AppRoutesPath.profile}${comment.user.id}`} className={cls.header} color={AppLinkColor.PRIMARY}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size='small' variant='rounded' />}
                <P size='large' className={cls.username}>
                    {comment.user.username}
                </P>
            </AppLink>
            <P>{comment.text}</P>
        </div>
    );
};
