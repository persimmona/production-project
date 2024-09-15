import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleLayout, ArticleLayoutSelector, ArticleList } from '@/entities/Article';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/shared/ui/Page/Page';
import { useAppDispatch } from '@/shared/utils/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/utils/useDebounce/useDebounce';
import { useInitialEffect } from '@/shared/utils/useInitialEffect/useInitialEffect';
import { useIntersectionObserver } from '@/shared/utils/useIntersectionObserver/useIntersectionObserver';
import { ReducersList, useReducersDynamicLoader } from '@/shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';

import { ARTICLES_PAGE_UID } from '../../model/const/defaults';
import { selectArticlesPageLayout, selectArticlesPageLoading, selectArticlesPageSearch } from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesList } from '../../model/services/fetchNextArticlesList/fetchNextArticlesList';
import { articlesPageActions, articlesPageReducer, articlesPageSelector } from '../../model/slice/articlesPageSlice';
import { ArticlesAdvancedSearch } from '../../model/types/articlesPage';
import { ArticlesQuickFilters } from '../ArticlesQuickFilters/ArticlesQuickFilters';
import { ArticlesSort } from '../ArticlesSort/ArticlesSort';

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

    const [searchParams, setSearchParams] = useSearchParams();
    useInitialEffect(() => {
        if (!articles.length) {
            dispatch(articlesPageActions.initState(searchParams));
            dispatch(fetchArticlesList());
        }
    });

    const onLoadMoreArticles = useCallback(() => {
        dispatch(fetchNextArticlesList());
    }, [dispatch]);

    useIntersectionObserver({ callback: onLoadMoreArticles, triggerRef, wrapperRef });

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList());
    }, [dispatch]);
    const debouncedFetchArticleList = useDebounce(fetchData, 500);

    const handleLayoutChange = useCallback(
        (layout: ArticleLayout) => {
            dispatch(articlesPageActions.setLayout(layout));
        },
        [dispatch],
    );

    const handleFilterChange = useCallback(
        <T extends keyof ArticlesAdvancedSearch>(uid: string, value: ArticlesAdvancedSearch[T]) => {
            dispatch(articlesPageActions.setAdvancedSearchValue({ uid: uid as T, value }));
            if (searchParams.has(uid) && !value) {
                searchParams.delete(uid);
            } else {
                searchParams.set(uid, value ?? '');
            }
            setSearchParams(searchParams);
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchArticleList();
        },
        [debouncedFetchArticleList, dispatch, searchParams, setSearchParams],
    );

    return (
        <Page ref={wrapperRef} className={cls.articlesPage}>
            <div className={cls.articleAdvancedSearch}>
                <div className={cls.sortWrapper}>
                    <ArticlesSort onChange={handleFilterChange} />
                    <ArticleLayoutSelector onLayoutChange={handleLayoutChange} selectedLayout={layout} />
                </div>
                <Input uid={ARTICLES_PAGE_UID.search} placeholder={t('search')} value={search} onChange={handleFilterChange} />
                <ArticlesQuickFilters onChange={handleFilterChange} />
            </div>
            <ArticleList articles={articles} isLoading={isLoading} layout={layout} />
            <div ref={triggerRef} className={cls.trigger}></div>
        </Page>
    );
};

export default ArticlesPage;
