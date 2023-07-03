import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { P } from 'shared/ui/P';
import {
    ArticleDetails,
    ArticleSkeleton,
    articleReducer,
    fetchArticleById,
    selectArticleData,
    selectArticleError,
    selectArticleIsLoading,
} from 'entities/Article';

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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && id) {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    if (!id) return <P color='error'>{t('not_found')}</P>;

    if (isLoading) return <ArticleSkeleton />;

    if (!article || articleError) return <P color='error'>{t('server_error')}</P>;

    return <ArticleDetails article={article} />;
};

export default ArticleDetailsPage;
