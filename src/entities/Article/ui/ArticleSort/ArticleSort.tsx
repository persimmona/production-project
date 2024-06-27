import { classNames } from 'shared/utils/classNames';
import cls from './ArticleSort.module.scss';

interface ArticleSortProps {
    className?: string;
}

export const ArticleSort = (props: ArticleSortProps) => {
    const { className } = props;

    return <div className={classNames(cls.articleSort, {}, [className])}></div>;
};
