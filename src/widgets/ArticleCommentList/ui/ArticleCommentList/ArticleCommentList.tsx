import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { CommentList } from 'entities/Comment';
import { fetchCommentsByArticleId } from 'widgets/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { selectArticleCommentListIsLoading } from '../../model/selectors/commentListSelectors';
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
    // const commentsError = useSelector(selectArticleCommentListError);
    const commentsIsLoading = useSelector(selectArticleCommentListIsLoading);

    useReducersDynamicLoader(reducerList);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);

    return (
        <div className={classNames(cls.articleCommentList, {}, [className])}>
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
    );
};
