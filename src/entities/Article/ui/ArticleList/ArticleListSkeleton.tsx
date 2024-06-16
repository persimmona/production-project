import { ArticleLayout } from 'entities/Article/model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListSkeletonProps {
    layout: ArticleLayout;
}
export function ArticleListSkeleton(props: ArticleListSkeletonProps) {
    const { layout } = props;

    return (
        <div className={cls[layout]}>
            {new Array(6).fill(0).map((el, index) => (
                <ArticleListItemSkeleton key={index} variant={layout} />
            ))}
        </div>
    );
}
