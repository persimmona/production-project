import { AppRoutes, AppRoutesPath } from '@/shared/const/routes';
import { AppLink, AppLinkColor } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { P } from '@/shared/ui/P';
import { classNames } from '@/shared/utils/classNames';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    comment: Comment;
    className?: string;
}

export const CommentCard = ({ comment, className }: CommentCardProps) => {
    return (
        <article className={classNames(cls.commentCard, {}, [className])} data-testid='CommentCard'>
            <AppLink to={AppRoutesPath[AppRoutes.PROFILE](comment.user.id)} className={cls.header} color={AppLinkColor.PRIMARY}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size='small' variant='rounded' />}
                <P size='large' className={cls.username} data-testid='CommentCard.Content'>
                    {comment.user.username}
                </P>
            </AppLink>
            <P>{comment.text}</P>
        </article>
    );
};
