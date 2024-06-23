import { ArticleLayout } from 'entities/Article/model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListSkeletonProps {
    layout: ArticleLayout;
}
export function ArticleListSkeleton(props: ArticleListSkeletonProps) {
    const { layout } = props;

    return (
        <>
            {new Array(6).fill(0).map((el, index) => (
                <ArticleListItemSkeleton key={index} variant={layout} />
            ))}
        </>
    );
}
