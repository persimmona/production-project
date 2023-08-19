import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { P } from 'shared/ui/P';
import { Header } from 'shared/ui/Header';
import {
    ArticleDetails,
    ArticleSkeleton,
    articleReducer,
    fetchArticleById,
    selectArticleData,
    selectArticleError,
    selectArticleIsLoading,
} from 'entities/Article';
import { ArticleCommentList } from 'widgets/ArticleCommentList';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';

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

    if (!id) return <P color='error'>{t('not_found')}</P>;

    if (isLoading) return <ArticleSkeleton />;

    if (!article || articleError) return <P color='error'>{t('server_error')}</P>;

    return (
        <div>
            <ArticleDetails article={article} />
            <Header tag='h2'>{t('comments')}</Header>
            <ArticleCommentList articleId={id} />
        </div>
    );
};

export default ArticleDetailsPage;
