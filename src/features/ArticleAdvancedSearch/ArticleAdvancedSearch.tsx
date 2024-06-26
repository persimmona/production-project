import { classNames } from 'shared/utils/classNames';
import cls from './ArticleAdvancedSearch.module.scss';

interface ArticleAdvancedSearchProps {
    className?: string;
}

export function ArticleAdvancedSearch(props: ArticleAdvancedSearchProps) {
    const { className } = props;

    return <div className={classNames(cls.articleAdvancedSearch, {}, [className])}></div>;
}
