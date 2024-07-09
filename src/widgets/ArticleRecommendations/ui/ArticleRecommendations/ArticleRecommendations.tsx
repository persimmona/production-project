import { ARTICLE_LAYOUT, ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { selectArticleRecommendationsIsLoading } from '../../model/selectors/articleRecommendationsSelectors';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleRecommendationsReducer, selectArticleRecommendations } from '../../model/slice/articleRecommendationsSlice';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
    className?: string;
}

const reducerList: ReducersList = {
    articleRecommendations: articleRecommendationsReducer,
};

export const ArticleRecommendations = ({ className }: ArticleRecommendationsProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(selectArticleRecommendations.selectAll);
    const isLoading = useSelector(selectArticleRecommendationsIsLoading);

    useReducersDynamicLoader(reducerList);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            layout={ARTICLE_LAYOUT.GRID}
            className={classNames(cls.articleRecommendations, {}, [className])}
        />
    );
};
