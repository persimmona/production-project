import { classNames } from 'shared/utils/classNames';
import { ARTICLE_LAYOUT, Article, ArticleLayout } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListSkeleton } from './ArticleListSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    layout?: ArticleLayout;
    isLoading?: boolean;
    className?: string;
}

export function ArticleList(props: ArticleListProps) {
    const { articles, isLoading = false, layout = ARTICLE_LAYOUT.GRID, className } = props;

    const renderArticleList = () => {
        return articles.map((article) => <ArticleListItem key={article.id} article={article} variant={layout} />);
    };

    return (
        <div className={classNames(cls.articleList, {}, [cls[layout], className])}>
            {renderArticleList()}
            {isLoading && <ArticleListSkeleton layout={layout} />}
        </div>
    );
}
