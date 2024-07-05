import { ArticleLayout, ArticleLayoutSelector, ArticleList } from 'entities/Article';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input';
import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { useIntersectionObserver } from 'shared/utils/useIntersectionObserver/useIntersectionObserver';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { ARTICLES_PAGE_UID } from '../../model/const/defaults';
import { selectArticlesPageLayout, selectArticlesPageLoading, selectArticlesPageSearch } from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesList } from '../../model/services/fetchNextArticlesList/fetchNextArticlesList';
import { articlesPageActions, articlesPageReducer, articlesPageSelector } from '../../model/slice/articlesPageSlice';
import { ArticlesAdvancedSearch } from '../../model/types/articlesPage';
import { ArticleSort } from '../../ui/ArticleSort/ArticleSort';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const articles = useSelector(articlesPageSelector.selectAll);
    const layout = useSelector(selectArticlesPageLayout);
    const isLoading = useSelector(selectArticlesPageLoading);
    const search = useSelector(selectArticlesPageSearch);

    const triggerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useReducersDynamicLoader(reducers, false);

    useInitialEffect(() => {
        if (!articles.length) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList());
        }
    });

    const onLoadMoreArticles = useCallback(() => {
        dispatch(fetchNextArticlesList());
    }, [dispatch]);

    useIntersectionObserver({ callback: onLoadMoreArticles, triggerRef, wrapperRef });

    const handleLayoutChange = useCallback(
        (layout: ArticleLayout) => {
            dispatch(articlesPageActions.setLayout(layout));
        },
        [dispatch],
    );

    const handleFilterChange = <T extends keyof ArticlesAdvancedSearch>(uid: string, value: ArticlesAdvancedSearch[T]) => {
        dispatch(articlesPageActions.setAdvancedSearchValue({ uid: uid as T, value }));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList());
    };

    return (
        <Page ref={wrapperRef} className={cls.articlesPage}>
            <div className={cls.articleAdvancedSearch}>
                <div className={cls.sortWrapper}>
                    <ArticleSort onChange={handleFilterChange} />
                    <ArticleLayoutSelector onLayoutChange={handleLayoutChange} selectedLayout={layout} />
                </div>
                <Input uid={ARTICLES_PAGE_UID.search} placeholder={t('search')} value={search} onChange={handleFilterChange} />
            </div>
            <ArticleList articles={articles} isLoading={isLoading} layout={layout} />
            <div ref={triggerRef} className={cls.trigger}></div>
        </Page>
    );
};

export default ArticlesPage;