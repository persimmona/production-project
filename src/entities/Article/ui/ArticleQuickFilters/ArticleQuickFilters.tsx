import { classNames } from 'shared/utils/classNames';
import cls from './ArticleQuickFilters.module.scss';

interface ArticleQuickFiltersProps {
    className?: string;
}

export const ArticleQuickFilters = (props: ArticleQuickFiltersProps) => {
    const { className } = props;

    return <div className={classNames(cls.articleQuickFilters, {}, [className])}></div>;
};
