import { classNames } from 'shared/utils/classNames';
import cls from './ArticleSort.module.scss';
import { Select } from 'shared/ui/Select/Select';

interface ArticleSortProps {
    className?: string;
}

export const ArticleSort = (props: ArticleSortProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.articleSort, {}, [className])}>
            <Select />
        </div>
    );
};
