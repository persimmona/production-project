import { ARTICLE_SORT_FIELD, ArticleSortField } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SORT_ORDER, SortOrder } from 'shared/const/common';
import { P } from 'shared/ui/P';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { classNames } from 'shared/utils/classNames';
import { ARTCLE_ADVANCED_SEARCH_UID } from '../../model/const/articleAdvancedSearchConst';
import { selectArticleAdvancedSearchState } from '../../model/selectors/articleAdvancedSearchSelectors';
import { ArticleAdvancedSearchKeys, ArticleAdvancedSearchSchema } from '../../model/types/articleAdvancedSearch';
import cls from './ArticleSort.module.scss';

interface ArticleSortProps {
    className?: string;
    onChange: <T extends ArticleAdvancedSearchKeys>(uid: string, value: ArticleAdvancedSearchSchema[T]) => void;
}

export const ArticleSort = (props: ArticleSortProps) => {
    const { className, onChange } = props;
    const { t } = useTranslation(['translation', 'article']);

    const { sortField, sortOrder } = useSelector(selectArticleAdvancedSearchState);

    const sortFieldOptions: SelectOption<ArticleSortField>[] = [
        {
            value: ARTICLE_SORT_FIELD.CREATED_AT,
            label: t('article:article_sort_field.created_at'),
        },
        {
            label: t('article:article_sort_field.title'),
            value: ARTICLE_SORT_FIELD.TITLE,
        },
        {
            label: t('article:article_sort_field.views'),
            value: ARTICLE_SORT_FIELD.VIEWS,
        },
    ];

    const sortOrderOptions: SelectOption<SortOrder>[] = [
        {
            label: t('sort.asc'),
            value: SORT_ORDER.ASC,
        },
        {
            label: t('sort.desc'),
            value: SORT_ORDER.DESC,
        },
    ];

    return (
        <div className={classNames(cls.articleSort, {}, [className])}>
            <P>{t('sort.sort')}</P>
            <Select uid={ARTCLE_ADVANCED_SEARCH_UID.sortField} onChange={onChange} options={sortFieldOptions} value={sortField} />
            <P>{t('sort.sort_by')}</P>
            <Select uid={ARTCLE_ADVANCED_SEARCH_UID.sortOrder} onChange={onChange} options={sortOrderOptions} value={sortOrder} />
        </div>
    );
};
