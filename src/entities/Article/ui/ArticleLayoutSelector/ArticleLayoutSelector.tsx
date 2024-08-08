import LayoutGridIcon from 'shared/assets/icons/layoutGrid.svg';
import LayoutListIcon from 'shared/assets/icons/layoutList.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { classNames } from 'shared/utils/classNames';
import { ARTICLE_LAYOUT } from '../../model/consts/articleConsts';
import { ArticleLayout } from '../../model/types/article';
import cls from './ArticleLayoutSelector.module.scss';

interface ArticleLayoutSelectorProps {
    className?: string;
    selectedLayout?: ArticleLayout;
    onLayoutChange: (layout: ArticleLayout) => void;
}

const layoutTypes: Record<ArticleLayout, React.VFC<React.SVGProps<SVGSVGElement>>> = {
    [ARTICLE_LAYOUT.GRID]: LayoutGridIcon,
    [ARTICLE_LAYOUT.LIST]: LayoutListIcon,
} as const;

export function ArticleLayoutSelector(props: ArticleLayoutSelectorProps) {
    const { className, selectedLayout = ARTICLE_LAYOUT.GRID, onLayoutChange } = props;

    const onLayoutButtonClick = (newLayout: ArticleLayout) => () => {
        onLayoutChange(newLayout);
    };

    const renderLayoutButtons = () => {
        return Object.entries(layoutTypes).map(([layout, icon]) => (
            <Button key={layout} onClick={onLayoutButtonClick(layout as ArticleLayout)}>
                <Icon Svg={icon} className={classNames('', { [cls.selected]: layout === selectedLayout })} />
            </Button>
        ));
    };

    return <div className={classNames(cls.articleLayoutSelector, {}, [className])}>{renderLayoutButtons()}</div>;
}
