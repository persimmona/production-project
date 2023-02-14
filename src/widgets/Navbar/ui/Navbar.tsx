import { Theme, useTheme } from "shared/contexts/theme";
import { AppLink, AppLinkType } from "shared/ui/AppLink";
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
        <div className={style.links}>
          <AppLink
            type={
              theme === Theme.DARK
                ? AppLinkType.PRIMARY
                : AppLinkType.PRIMARY_INVERTED
            }
            to={"/"}
            className={style.link}
          >
            Main
          </AppLink>
          <AppLink
            type={
              theme === Theme.DARK
                ? AppLinkType.SECONDARY
                : AppLinkType.SECONDARY_INVERTED
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
