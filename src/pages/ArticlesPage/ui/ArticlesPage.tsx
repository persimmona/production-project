import { ArticleLayout, ArticleList } from 'entities/Article';
import { ArticleLayoutSelector } from 'features/ArticleLayoutSelector/ArticleLayoutSelector';
import { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { useIntersectionObserver } from 'shared/utils/useIntersectionObserver/useIntersectionObserver';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import {
    selectArticlesPageLayout,
    selectArticlesPageLoading,
    selectArticlesPagePagination,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesList } from '../model/services/fetchNextArticlesList/fetchNextArticlesList';
import { articlesPageActions, articlesPageReducer, articlesPageSelector } from '../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const articles = useSelector(articlesPageSelector.selectAll);
    const layout = useSelector(selectArticlesPageLayout);
    const isLoading = useSelector(selectArticlesPageLoading);

    const triggerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const { hasMore } = useSelector(selectArticlesPagePagination);

    useReducersDynamicLoader(reducers, false);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (!articles.length) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    });

    const onLoadMoreArticles = useCallback(() => {
        dispatch(fetchNextArticlesList());
    }, [dispatch]);

    useIntersectionObserver({ callback: onLoadMoreArticles, triggerRef, wrapperRef });

    const handleLayoutChange = useCallback(
        (newLayout: ArticleLayout) => {
            dispatch(articlesPageActions.setLayout(newLayout));
        },
        [dispatch],
    );

    return (
        <Page ref={wrapperRef} className={cls.articlesPage}>
            <ArticleLayoutSelector onLayoutChange={handleLayoutChange} selectedLayout={layout} className={cls.selector} />
            <ArticleList articles={articles} isLoading={isLoading} layout={layout} />
            {hasMore && <div ref={triggerRef}></div>}
        </Page>
    );
};

export default ArticlesPage;
