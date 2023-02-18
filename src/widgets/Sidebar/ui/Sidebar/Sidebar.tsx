import { ThemeSwitcher } from "features/ThemeSwitcher";
import { useState } from "react";
import { Button } from "shared/ui/Button";
import { classNames } from "shared/utils/classNames";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.main}>
        <Button onClick={toggleCollapse}>Toggle</Button>
      </div>

    
	  <div className={cls.bottom}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
