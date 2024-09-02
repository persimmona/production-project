import { classNames } from '@/shared/utils/classNames';
import { ProfileInfoItem } from '../../ui/ProfileInfoItem/ProfileInfoItem';
import cls from './ProfileInfoList.module.scss';

interface ProfileInfoItem {
    label: string;
    value: string;
}

interface ProfileInfoListProps {
    items: ProfileInfoItem[];
    className?: string;
}

export const ProfileInfoList = ({ items, className }: ProfileInfoListProps) => {
    return (
        <div className={classNames(cls.profileInfoList, {}, [className])}>
            {items.map(({ label, value }) => (
                <ProfileInfoItem key={label} label={label} value={value} />
            ))}
        </div>
    );
};
