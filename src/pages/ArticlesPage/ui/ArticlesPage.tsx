import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { selectArticlesPageLoading } from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesPageReducer, articlesPageSelector } from '../model/slice/articlesPageSlice';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(articlesPageSelector.selectAll);
    const isLoading = useSelector(selectArticlesPageLoading);

    useReducersDynamicLoader(reducers);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    return (
        <div>
            <ArticleList articles={articles} isLoading={isLoading} />
        </div>
    );
};

export default ArticlesPage;
