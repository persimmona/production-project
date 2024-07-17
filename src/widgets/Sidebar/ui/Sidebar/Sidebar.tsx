import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'shared/contexts/theme';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';
import { selectSidebarItems } from '../../model/selectors/sidebarSelectors';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { theme } = useTheme();

    const sidebarItems = useSelector(selectSidebarItems);

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    const mainNavigation = sidebarItems.map((item) => <SidebarItem collapsed={collapsed} item={item} theme={theme} key={item.path} />);

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid='sidebar'>
            <div className={cls.main}>{mainNavigation}</div>

            <div className={cls.bottom}>
                <ThemeSwitcher className={cls.bottomItem} />
                <LangSwitcher className={cls.bottomItem} />
            </div>

            <Button onClick={toggleCollapse} data-testid='sidebar-toggle' className={cls.toggleButton}>
                {collapsed ? '<' : '>'}
            </Button>
        </div>
    );
};
