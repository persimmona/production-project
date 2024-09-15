import { ReactElement, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon';
import { classNames } from '@/shared/utils/classNames';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    selectedStarsCount: number;
    onSelect?: (starsCount: number) => void;
    className?: string;
}

const STARS_COUNT = 5;
const stars = new Array(STARS_COUNT).fill(0);

export function StarRating(props: StarRatingProps) {
    const { className, selectedStarsCount, onSelect } = props;

    const [hoveredStarsCount, setHoveredStarsCount] = useState(selectedStarsCount);

    const onMouseLeave = () => {
        if (!selectedStarsCount) {
            setHoveredStarsCount(0);
        }
    };

    const onMouseEnter = (starsCount: number) => () => {
        if (!selectedStarsCount) {
            setHoveredStarsCount(starsCount);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!selectedStarsCount) {
            onSelect?.(starsCount);
        }
    };

    const renderStars = (): ReactElement[] => {
        return stars.map((_, index): ReactElement => {
            const starsCount = index + 1;

            return (
                <Icon
                    key={index}
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: starsCount <= hoveredStarsCount,
                        [cls.selected]: !!selectedStarsCount,
                    })}
                    Svg={StarIcon}
                    onMouseEnter={onMouseEnter(starsCount)}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick(starsCount)}
                />
            );
        });
    };

    return <div className={classNames(cls.starRating, {}, [className])}>{renderStars()}</div>;
}
