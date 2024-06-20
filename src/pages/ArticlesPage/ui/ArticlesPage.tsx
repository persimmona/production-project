import { ArticleLayout, ArticleList } from 'entities/Article';
import { ArticleLayoutSelector } from 'features/ArticleLayoutSelector/ArticleLayoutSelector';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { selectArticlesPageLayout, selectArticlesPageLoading } from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, articlesPageSelector } from '../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const layout = useSelector(selectArticlesPageLayout);
    const isLoading = useSelector(selectArticlesPageLoading);

    useReducersDynamicLoader(reducers);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    const handleLayoutChange = useCallback(
        (newLayout: ArticleLayout) => {
            dispatch(articlesPageActions.setLayout(newLayout));
        },
        [dispatch],
    );

    return (
        <div className={cls.articlesPage}>
            <ArticleLayoutSelector onLayoutChange={handleLayoutChange} selectedLayout={layout} className={cls.selector} />
            <ArticleList articles={articles} isLoading={isLoading} layout={layout} />
        </div>
    );
};

export default ArticlesPage;
