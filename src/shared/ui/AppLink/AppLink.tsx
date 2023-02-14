import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/utils/classNames";
import style from "./AppLink.module.scss";

export enum AppLinkType {
  PRIMARY = "primary",
  PRIMARY_INVERTED = "primary-inverted",
  SECONDARY = "secondary",
  SECONDARY_INVERTED = "secondary-inverted",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  type: AppLinkType;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  type = AppLinkType.PRIMARY,
  children,
  ...props
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(style['app-link'], {}, [style[type], className])}
    {...props}
  >
    {children}
  </Link>
);
