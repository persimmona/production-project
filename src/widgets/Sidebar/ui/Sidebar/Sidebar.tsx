import { useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/utils/classNames';

import { selectSidebarItems } from '../../model/selectors/sidebarSelectors';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const sidebarItems = useSelector(selectSidebarItems);

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    const mainNavigation = sidebarItems.map((item) => <SidebarItem collapsed={collapsed} item={item} key={item.path} />);

    return (
        <nav aria-label='Side menu' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid='sidebar'>
            <ul className={cls.main}>{mainNavigation}</ul>

            <div className={cls.bottom}>
                <ThemeSwitcher className={cls.bottomItem} />
                <LangSwitcher className={cls.bottomItem} />
            </div>

            <Button
                aria-label={collapsed ? 'Show side navigation' : 'Hide side navigation'}
                aria-expanded={!collapsed}
                onClick={toggleCollapse}
                data-testid='sidebar-toggle'
                className={cls.toggleButton}
            >
                {collapsed ? '<' : '>'}
            </Button>
        </nav>
    );
};
