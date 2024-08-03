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
import { AppRoutes, AppRoutesPath } from 'shared/const/routes';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink';
import { Header } from 'shared/ui/Header';
import { Loader } from 'shared/ui/Loader';
import { P } from 'shared/ui/P';
import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { ArticleCommentList } from 'widgets/ArticleCommentList';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { ArticleRecommendations } from 'widgets/ArticleRecommendations';

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
    }, [id]);

    const onCommentAdd = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle({ articleId: id, text }));
        },
        [dispatch, id],
    );

    if (!id) return <P color='error'>{t('not_found')}</P>;

    if (isLoading)
        return (
            <Page>
                <ArticleSkeleton />
            </Page>
        );

    if (!article || articleError)
        return (
            <Page>
                <P color='error'>{t('server_error')}</P>
            </Page>
        );

    return (
        <Page>
            <AppLink to={AppRoutesPath[AppRoutes.ARTICLES]} color={AppLinkColor.TEXT}>
                {t('article:back_to_articles')}
            </AppLink>
            <ArticleDetails article={article} />
            <Header tag='h2'>{t('article:recommendations')}</Header>
            <ArticleRecommendations />
            <Header tag='h2'>{t('article:comments')}</Header>
            <AddCommentForm onCommentAdd={onCommentAdd} />
            <ArticleCommentList articleId={id} />
        </Page>
    );
};

export default ArticleDetailsPage;
