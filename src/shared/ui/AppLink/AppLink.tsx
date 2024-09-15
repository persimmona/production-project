import { FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/utils/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkColor {
    TEXT = 'text',
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primary-inverted',
    SECONDARY = 'secondary',
    SECONDARY_INVERTED = 'secondary-inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    color: AppLinkColor;
}

export const AppLink: FC<AppLinkProps> = ({ className, to, color = AppLinkColor.PRIMARY, children, ...props }: AppLinkProps) => (
    <Link to={to} className={classNames(cls['app-link'], {}, [cls[color], className])} {...props}>
        {children}
    </Link>
);
