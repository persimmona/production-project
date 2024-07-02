import { ARTICLE_SORT_FIELD, ArticleSortField } from 'entities/Article';
import { useSelector } from 'react-redux';
import { SORT_ORDER, SortOrder } from 'shared/const/common';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { classNames } from 'shared/utils/classNames';
import { useAppDispatch } from 'shared/utils/useAppDispatch/useAppDispatch';
import { ARTCLE_ADVANCED_SEARCH_UID } from '../../model/selectors/articleAdvancedSearchConst';
import { selectArticleAdvancedSearchState } from '../../model/selectors/articleAdvancedSearchSelectors';
import { articleAdvancedSearchActions } from '../../model/slice/articleAdvancedSearchSlice';
import { ArticleAdvancedSearchKeys, ArticleAdvancedSearchSchema } from '../../model/types/articleAdvancedSearch';
import cls from './ArticleSort.module.scss';

interface ArticleSortProps {
    className?: string;
}

export const ArticleSort = (props: ArticleSortProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { sortField, sortOrder } = useSelector(selectArticleAdvancedSearchState);

    const onChange = <T extends ArticleAdvancedSearchKeys>(uid: string, value: ArticleAdvancedSearchSchema[T]) => {
        dispatch(articleAdvancedSearchActions.setStateValue({ uid: uid as T, value }));
    };

    const sortFieldOptions: SelectOption<ArticleSortField>[] = [
        {
            label: 'Created at',
            value: ARTICLE_SORT_FIELD.CREATED_AT,
        },
        {
            label: 'Title',
            value: ARTICLE_SORT_FIELD.TITLE,
        },
        {
            label: 'Views',
            value: ARTICLE_SORT_FIELD.VIEWS,
        },
    ];

    const sortOrderOptions: SelectOption<SortOrder>[] = [
        {
            label: 'asc',
            value: SORT_ORDER.ASC,
        },
        {
            label: 'desc',
            value: SORT_ORDER.DESC,
        },
    ];

    return (
        <div className={classNames(cls.articleSort, {}, [className])}>
            <Select uid={ARTCLE_ADVANCED_SEARCH_UID.sortField} onChange={onChange} options={sortFieldOptions} value={sortField} />
            <Select uid={ARTCLE_ADVANCED_SEARCH_UID.sortOrder} onChange={onChange} options={sortOrderOptions} value={sortOrder} />
        </div>
    );
};
