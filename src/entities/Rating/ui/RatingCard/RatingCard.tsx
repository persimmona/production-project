import { P } from '@/shared/ui/P';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { classNames } from '@/shared/utils/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    title?: string;
    selectedRating?: number;
    onSubmit?: (rating: number) => void;
    className?: string;
}

export function RatingCard(props: RatingCardProps) {
    const { title, className, selectedRating, onSubmit } = props;
    const { t } = useTranslation();

    const [rating, setRating] = useState(selectedRating);

    const onRatingSelect = useCallback(
        (selectedStars: number) => {
            setRating(selectedStars);
            onSubmit?.(selectedStars);
        },
        [onSubmit],
    );

    return (
        <div className={classNames(cls.ratingCard, {}, [className])}>
            <P>{rating ? t('main:thanks_for_opinion') : title}</P>
            <StarRating onSelect={onRatingSelect} selectedStarsCount={rating ?? 0} />
        </div>
    );
}
