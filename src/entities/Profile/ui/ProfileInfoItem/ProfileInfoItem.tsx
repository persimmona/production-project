import cls from './ProfileInfoItem.module.scss';

export interface ProfileInfoItemProps {
    label: string;
    value: string;
}

export const ProfileInfoItem = ({ label, value }: ProfileInfoItemProps) => {
    return (
        <div className={cls.profileInfoItem}>
            <span className={cls.profileInfoLabel}>{label}:</span> {value}
        </div>
    );
};
