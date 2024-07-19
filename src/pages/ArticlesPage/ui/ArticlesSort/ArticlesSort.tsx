import { ARTICLE_SORT_FIELD, ArticleSortField } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SORT_ORDER, SortOrder } from 'shared/const/common';
import { P } from 'shared/ui/P';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { classNames } from 'shared/utils/classNames';
import { ARTICLES_PAGE_UID } from '../../model/const/defaults';
import { selectArticlesPageSortField, selectArticlesPageSortOrder } from '../../model/selectors/articlesPageSelectors';
import { ArticlesAdvancedSearch } from '../../model/types/articlesPage';
import cls from './ArticlesSort.module.scss';

interface ArticlesSortProps {
    className?: string;
    onChange: <T extends keyof ArticlesAdvancedSearch>(uid: string, value: ArticlesAdvancedSearch[T]) => void;
}

export const ArticlesSort = (props: ArticlesSortProps) => {
    const { className, onChange } = props;
    const { t } = useTranslation(['translation', 'article']);

    const sortField = useSelector(selectArticlesPageSortField);
    const sortOrder = useSelector(selectArticlesPageSortOrder);

    const sortFieldOptions: SelectOption<ArticleSortField>[] = [
        {
            value: ARTICLE_SORT_FIELD.CREATED_AT,
            readableValue: t('article:article_sort_field.created_at'),
        },
        {
            readableValue: t('article:article_sort_field.title'),
            value: ARTICLE_SORT_FIELD.TITLE,
        },
        {
            readableValue: t('article:article_sort_field.views'),
            value: ARTICLE_SORT_FIELD.VIEWS,
        },
    ];

    const sortOrderOptions: SelectOption<SortOrder>[] = [
        {
            readableValue: t('sort.asc'),
            value: SORT_ORDER.ASC,
        },
        {
            readableValue: t('sort.desc'),
            value: SORT_ORDER.DESC,
        },
    ];

    return (
        <div className={classNames(cls.articleSort, {}, [className])}>
            <P>{t('sort.sort')}</P>
            <Select uid={ARTICLES_PAGE_UID.sortField} onChange={onChange} options={sortFieldOptions} value={sortField} />
            <P>{t('sort.sort_by')}</P>
            <Select uid={ARTICLES_PAGE_UID.sortOrder} onChange={onChange} options={sortOrderOptions} value={sortOrder} />
        </div>
    );
};
