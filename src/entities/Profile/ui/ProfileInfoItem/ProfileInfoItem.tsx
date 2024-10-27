import { P } from '@/shared/ui/P';

import cls from './ProfileInfoItem.module.scss';

export interface ProfileInfoItemProps {
    label: string;
    value: string;
    testId?: string;
}

export const ProfileInfoItem = ({ label, value, testId }: ProfileInfoItemProps) => {
    return (
        <P className={cls.profileInfoItem} data-testid={testId}>
            <span className={cls.profileInfoLabel}>{label}:</span> {value}
        </P>
    );
};
