import { ArticleLayout, ArticleLayoutSelector } from 'entities/Article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui/Input';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/utils/useInitialEffect/useInitialEffect';
import { ReducersList, useReducersDynamicLoader } from 'shared/utils/useReducersDynamicLoader/useReducersDynamicLoader';
import { ARTCLE_ADVANCED_SEARCH_UID } from '../../model/const/articleAdvancedSearchConst';
import { selectArticleAdvancedSearchState } from '../../model/selectors/articleAdvancedSearchSelectors';
import { articleAdvancedSearchActions, articleAdvancedSearchReducer } from '../../model/slice/articleAdvancedSearchSlice';
import { ArticleAdvancedSearchKeys, ArticleAdvancedSearchSchema } from '../../model/types/articleAdvancedSearch';
import { ArticleSort } from '../ArticleSort/ArticleSort';
import cls from './ArticleAdvancedSearch.module.scss';

interface ArticleAdvancedSearchProps {
    className?: string;
    onFilterChange?: (options: Partial<ArticleAdvancedSearchSchema>) => void;
}

const reducerList: ReducersList = {
    articleAdvancedSearch: articleAdvancedSearchReducer,
};

export function ArticleAdvancedSearch(props: ArticleAdvancedSearchProps) {
    const { className, onFilterChange } = props;

    useReducersDynamicLoader(reducerList);

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { search, layout } = useSelector(selectArticleAdvancedSearchState);

    useInitialEffect(() => {
        dispatch(articleAdvancedSearchActions.initState());
    });

    const handleLayoutChange = useCallback(
        (layout: ArticleLayout) => {
            dispatch(articleAdvancedSearchActions.setLayout(layout));
            onFilterChange?.({ layout });
        },
        [dispatch, onFilterChange],
    );

    const handleFilterChange = <T extends ArticleAdvancedSearchKeys>(uid: string, value: ArticleAdvancedSearchSchema[T]) => {
        dispatch(articleAdvancedSearchActions.setStateValue({ uid: uid as T, value }));
        onFilterChange?.({ [uid]: value });
    };

    return (
        <div className={classNames(cls.articleAdvancedSearch, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSort onChange={handleFilterChange} />
                <ArticleLayoutSelector onLayoutChange={handleLayoutChange} selectedLayout={layout} />
            </div>
            <Input uid={ARTCLE_ADVANCED_SEARCH_UID.search} placeholder={t('search')} value={search} onChange={handleFilterChange} />
        </div>
    );
}
