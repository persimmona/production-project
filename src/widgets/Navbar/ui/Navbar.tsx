import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Theme, useTheme } from "shared/contexts/theme";
import { AppLink, AppLinkColor } from "shared/ui/AppLink";
import { classNames } from "shared/utils/classNames/classNames";
import style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={classNames(style.inner, {}, ["page-width"])}>
        <ThemeSwitcher />
        
        <div className={style.links}>
          <AppLink
            color={
              theme === Theme.DARK
                ? AppLinkColor.PRIMARY
                : AppLinkColor.PRIMARY_INVERTED
            }
            to={"/"}
            className={style.link}
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
            className={style.link}
          >
            About
          </AppLink>
        </div>
      </div>
    </div>
  );
};
