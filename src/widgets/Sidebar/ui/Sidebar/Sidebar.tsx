import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid='sidebar'>
            <div className={cls.main}>
                <Button onClick={toggleCollapse} data-testid='sidebar-toggle'></Button>
            </div>

            <div className={cls.bottom}>
                <ThemeSwitcher className={cls.bottomItem} />
                <LangSwitcher className={cls.bottomItem} />
            </div>
        </div>
    );
};
