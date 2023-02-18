import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Theme, useTheme } from "shared/contexts/theme";
import { AppLink, AppLinkColor } from "shared/ui/AppLink";
import { classNames } from "shared/utils/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.inner, {}, ["page-width"])}>
        <div className={cls.links}>
          <AppLink
            color={
              theme === Theme.DARK
                ? AppLinkColor.PRIMARY
                : AppLinkColor.PRIMARY_INVERTED
            }
            to={"/"}
            className={cls.link}
          >
            Main
          </AppLink>
          <AppLink
            color={
              theme === Theme.DARK
                ? AppLinkColor.SECONDARY
                : AppLinkColor.SECONDARY_INVERTED
            }
            to={"/about"}
            className={cls.link}
          >
            About
          </AppLink>
        </div>
      </div>
    </div>
  );
};
