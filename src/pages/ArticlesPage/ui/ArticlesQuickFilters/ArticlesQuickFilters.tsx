import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleType } from '@/entities/Article';
import { QuickFilter, QuickFilters } from '@/shared/ui/QuickFilters';

import { ARTICLES_PAGE_UID } from '../../model/const/defaults';
import { selectArticlesPageType } from '../../model/selectors/articlesPageSelectors';
import { ArticlesAdvancedSearch } from '../../model/types/articlesPage';

interface ArticlesQuickFiltersProps {
    className?: string;
    onChange: <T extends keyof ArticlesAdvancedSearch>(uid: string, value: ArticlesAdvancedSearch[T]) => void;
}

export function ArticlesQuickFilters(props: ArticlesQuickFiltersProps) {
    const { className, onChange } = props;
    const { t } = useTranslation('article');

    const type = useSelector(selectArticlesPageType);

    const onTypeChange = useCallback(
        (value: ArticleType | null) => {
            onChange(ARTICLES_PAGE_UID.type, value);
        },
        [onChange],
    );

    return (
        <QuickFilters selectedValue={type} onChange={onTypeChange} className={className}>
            <QuickFilter label={t('article:type.it')} value={ArticleType.IT} />
            <QuickFilter label={t('article:type.economics')} value={ArticleType.ECONOMICS} />
            <QuickFilter label={t('article:type.science')} value={ArticleType.SCIENCE} />
        </QuickFilters>
    );
}
