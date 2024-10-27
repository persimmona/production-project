import { classNames } from '@/shared/utils/classNames';

import { ProfileInfoItem, ProfileInfoItemProps } from '../../ui/ProfileInfoItem/ProfileInfoItem';

import cls from './ProfileInfoList.module.scss';

interface ProfileInfoListProps {
    items: ProfileInfoItemProps[];
    className?: string;
}

export const ProfileInfoList = ({ items, className }: ProfileInfoListProps) => {
    return (
        <div className={classNames(cls.profileInfoList, {}, [className])}>
            {items.map(({ label, value, testId }) => (
                <ProfileInfoItem key={label} label={label} value={value} testId={testId} />
            ))}
        </div>
    );
};
