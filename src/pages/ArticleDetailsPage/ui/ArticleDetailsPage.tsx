import {
    ArticleDetails,
    ArticleSkeleton,
    articleReducer,
    fetchArticleById,
    selectArticleData,
    selectArticleError,
    selectArticleIsLoading,
} from 'entities/Article';
import { AddCommentForm } from 'features/AddCommentForm';
import { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header } from 'shared/ui/Header';
import { Loader } from 'shared/ui/Loader';
import { P } from 'shared/ui/P';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { ArticleCommentList } from 'widgets/ArticleCommentList';
import { addCommentForArticle } from '../model/services/addCommentForArticle';

const reducers: ReducersList = {
    article: articleReducer,
};

const ArticleDetailsPage = () => {
    useReducersDynamicLoader(reducers);
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article');

    const article = useSelector(selectArticleData);
    const isLoading = useSelector(selectArticleIsLoading);
    const articleError = useSelector(selectArticleError);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) dispatch(fetchArticleById(id));
    });

    const onCommentAdd = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle({ articleId: id, text }));
        },
        [dispatch, id],
    );

    if (!id) return <P color='error'>{t('not_found')}</P>;

    if (isLoading) return <ArticleSkeleton />;

    if (!article || articleError) return <P color='error'>{t('server_error')}</P>;

    return (
        <Suspense fallback={<Loader />}>
            <ArticleDetails article={article} />
            <Header tag='h2'>{t('comments')}</Header>
            <AddCommentForm onCommentAdd={onCommentAdd} />
            <ArticleCommentList articleId={id} />
        </Suspense>
    );
};

export default ArticleDetailsPage;
