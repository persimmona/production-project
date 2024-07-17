import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { selectArticleCommentListIsLoading } from '../../model/selectors/commentListSelectors';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleCommentListReducer, selectArticleCommentList } from '../../model/slice/articleCommentListSlice';
import cls from './ArticleCommentList.module.scss';

interface ArticleCommentListProps {
    articleId: string;
    className?: string;
}

const reducerList: ReducersList = {
    articleCommentList: articleCommentListReducer,
};

export const ArticleCommentList = ({ articleId, className }: ArticleCommentListProps) => {
    const dispatch = useAppDispatch();

    const comments = useSelector(selectArticleCommentList.selectAll);
    const commentsIsLoading = useSelector(selectArticleCommentListIsLoading);

    useReducersDynamicLoader(reducerList);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    return (
        <div className={classNames(cls.articleCommentList, {}, [className])}>
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
    );
};
